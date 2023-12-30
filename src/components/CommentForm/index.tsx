/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Styling Imports
import {
  ButtonItem,
  CommentFormContainer,
  CommentFormContent,
  CommentFormHeader,
  CommentHeaderUserInfos,
  ContentButtons,
  FormError,
  TextAreaContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

// Components Imports
import { Rating as StarRating } from '../Rating'

// Strategic Imports
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import * as Toast from '@radix-ui/react-toast'

// Icons Imports
import { Check, CircleNotch, X } from 'phosphor-react'

const CommentFormBodySchema = z.object({
  rate: z
    .number()
    .min(1, { message: 'É necessário avaliar com pelo menos 1 estrela.' })
    .max(5, { message: 'A avaliação deve ter no máximo 5 estrelas.' }),
  description: z
    .string()
    .min(3, { message: 'A avaliação deve ter no mínimo 3 caracteres' })
    .max(450, { message: 'A avaliação deve ter no máximo 450 caracteres.' }),
})

type CommentFormBodyData = z.infer<typeof CommentFormBodySchema>

type CommentFormProps = {
  setNewFormRating: Dispatch<SetStateAction<boolean>>
  setModalOpen: Dispatch<SetStateAction<boolean>>
  book: BookWithAverageRatingProps
}

export function CommentForm({
  setNewFormRating,
  book,
  setModalOpen,
}: CommentFormProps) {
  const [toastOpen, setToastOpen] = useState(false)

  const session = useSession()

  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<CommentFormBodyData>({
    resolver: zodResolver(CommentFormBodySchema),
  })

  const countCommentCharacters = () => {
    const comment = watch('description')

    return comment ? comment.match(/./g)!.length : 0
  }

  const { mutateAsync: handleNewRate } = useMutation({
    mutationFn: async (data: CommentFormBodyData) => {
      await api.post(`/books/${book.id}/rate`, {
        description: data.description,
        rate: data.rate,
      })
    },
  })

  async function handleCreateNewComment(data: CommentFormBodyData) {
    await handleNewRate(data)

    reset()

    setTimeout(() => {
      setNewFormRating(false)
      setModalOpen(false)
    }, 4000)

    setToastOpen(true)
  }

  return (
    <CommentFormContainer>
      <CommentFormHeader>
        <CommentHeaderUserInfos>
          <Image
            src={session.data?.user.avatar_url!}
            alt=""
            width={40}
            height={40}
          />

          <strong>{session.data?.user.name}</strong>
        </CommentHeaderUserInfos>

        <Controller
          name="rate"
          control={control}
          defaultValue={0}
          rules={{ min: 1, max: 5 }}
          render={({ field }) => (
            <StarRating
              starSize={24}
              rating={field.value}
              onChange={(rating) => field.onChange(rating)}
            />
          )}
        />
      </CommentFormHeader>

      {errors.rate && <FormError>{errors.rate?.message}</FormError>}

      <CommentFormContent onSubmit={handleSubmit(handleCreateNewComment)}>
        <TextAreaContainer>
          <textarea
            placeholder="Escreva a sua avaliação"
            maxLength={450}
            {...register('description')}
            disabled={isSubmitSuccessful}
          />
          <span>{countCommentCharacters()}/450</span>
        </TextAreaContainer>

        {errors.description && (
          <FormError>{errors.description.message}</FormError>
        )}

        <ContentButtons isSubmitting={isSubmitting}>
          <ButtonItem
            onClick={() => setNewFormRating(false)}
            disabled={isSubmitSuccessful}
          >
            <X size={24} weight="bold" />
          </ButtonItem>

          <Toast.Provider swipeDirection="right" duration={4000}>
            <ButtonItem
              type="submit"
              disabled={isSubmitting || isSubmitSuccessful}
            >
              {isSubmitting ? (
                <CircleNotch size={24} weight="bold" />
              ) : (
                <Check size={24} weight="bold" />
              )}
            </ButtonItem>

            <ToastRoot open={toastOpen} onOpenChange={setToastOpen}>
              <ToastTitle>{`O livro "${book.name}" foi avaliado com sucesso!`}</ToastTitle>
              <ToastDescription asChild>
                <span>{`Você avaliou este livro com ${watch(
                  'rate',
                )} estrelas`}</span>
              </ToastDescription>
            </ToastRoot>

            <ToastViewport />
          </Toast.Provider>
        </ContentButtons>
      </CommentFormContent>
    </CommentFormContainer>
  )
}
