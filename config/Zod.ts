import * as z from "zod";

export const UserFeedBack = z.object({
  Name: z.string().min(1,"please enter your name !").max(50,"your name is too long !"),
  Email:z.string().email('please enter valid email address!'),
  Subject:z.string().min(1,"what was your subject ?").max(50,"your subject is too long !"),
  Message:z.string().min(1,"this fiels is required !").max(500,"your message is too long !")
});