import OpenAI from "openai";
import { configDotenv } from "dotenv";
configDotenv()

const openai = new OpenAI({
  organization: process.env.ORGNIZATION,
  project: process.env.PROJECT_ID,
})
