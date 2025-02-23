'use server'

import { createClient } from "../utils/supabase/server"

export async function submitRSVP(formdata: FormData){

  const supabase = await createClient()
  const name = formdata.get('name')
  const email = formdata.get('email')
  const accompany = formdata.get('accompany')
  const attendance = formdata.get('attendance')
  const {data , error} = await supabase.from('rsvps').insert([
    { name, email, accompany, attendance }
  ])
  console.log(data,"successfully data submitted")

  if(error){
    console.log(error, "Insert failed")
    return {success: false, message: "Insert failed", error}
  }

  return {success: true, message: "RSVP submitted successful", data}

}