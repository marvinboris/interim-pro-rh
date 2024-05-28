import { API_URL } from "@/config";
import {
  Applicant,
  Company,
  Contact,
  Diploma,
  FAQ,
  Job,
  News,
  Request,
  Service,
  SkillHR,
  Subscriber,
  TeamMember,
  Testimony,
} from "@types";

type ToData<T> = T | T[];
type ResUnit =
  | Applicant
  | Company
  | Contact
  | Diploma
  | FAQ
  | Job
  | News
  | Request
  | Service
  | SkillHR
  | Subscriber
  | TeamMember
  | Testimony;
export type RequestData = ToData<ResUnit>;
export type FromData<T extends RequestData> = T extends Array<infer U> ? U : T;
export type Resource =
  | "applicant"
  | "company"
  | "contact"
  | "diploma"
  | "faq"
  | "hr"
  | "job"
  | "news"
  | "request"
  | "service"
  | "subscriber"
  | "team"
  | "testimony";

export async function fetch<T extends RequestData>({
  resource,
  method,
  data: body,
  params,
}: {
  resource: Resource;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: FromData<T>;
  params?: Record<string, string | number | boolean>;
}) {
  try {
    const res = await window.fetch(
      `${
        API_URL +
        resource +
        ((method === "PUT" || method === "DELETE") && body?.id
          ? `${body?.id}/`
          : "")
      }.json${
        params
          ? `?${Object.entries(params)
              .map(([key, value]) => `${key}=${value}`)
              .join("&")}`
          : ""
      }`,
      {
        method,
        body: JSON.stringify(body),
      }
    );
    const result = await res.json();
    return result as T | undefined;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
