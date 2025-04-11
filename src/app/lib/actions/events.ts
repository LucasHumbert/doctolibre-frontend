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

  console.log(event)

  return true
}