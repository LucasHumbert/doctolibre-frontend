"use server"

import {auth} from "@/auth";

export const createRepetitiveEvent = async (weekDays: number[], startTime: string, endTime: string, title: string, description: string|null) => {
  const session = await auth()

  const event = {
    "weekDays": { "days": weekDays },
    "title": title,
    "description": description,
    "startHour": startTime,
    "endHour": endTime,
    "userId": session?.user.id
  }

  const res = await fetch(`${process.env.BACKEND_URL}/event/create`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.access_token}`
    },
    body: JSON.stringify(event)
  })

  const result = await res.json()

  if (result?.success) {
    return { success: true }
  }
}