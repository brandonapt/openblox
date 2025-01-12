// [ MODULES ] ///////////////////////////////////////////////////////////////////////////////////////////////////////
import { apiFuncBaseHandler as BaseHandler, buildApiMethodResponse as buildResponse } from "../../../apis/apis.utils"

import { getCacheSettingsOverride, getCredentialsOverride } from "../../../config/config"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ TYPES ] /////////////////////////////////////////////////////////////////////////////////////////////////////////
import type { Config, ThisAllOverrides } from "../../../config/config.types"
import { cloneAndMutateObject } from "../../../utils"
import { AnyObject } from "../../../utils/utils.types"
import type { ApiMethodResponse } from "../../apis.types"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const baseUrl = "https://apis.roblox.com/messaging-service"
const apiName = "MessagingApi"
type ThisProfile = Config<typeof apiName>

// All api methods that should not be cached (methods that update/set
// data - basically any request that isnt `GET` except in some special circumstances)
export const shouldNotCacheMethods = [ "publishMessage" ]


/**
 * Returns a list of data stores belonging to an experience.
 * @endpoint POST /v1/universes/{universeId}/topics/{topic}
 * @tags [ "Cloud Key" ]
 * 
 * @example
 * // Openblox (Typescript Code) - Sending Message
 * type Message = { targetId: number, reason: string };
   await MessagingApi.publishMessage<Message>(
     5097539509, "kickPlr",
     { targetId: 45348281, reason: "You smell kinda funny." }
   );

   /* Roblox Luau Code - Recieving The Message Above
   local MessagingService = game:GetService("MessagingService")
   local HttpService = game:GetService("HttpService")
   local Players = game:GetService("Players")


   MessagingService:SubscribeAsync("kickPlr", function(msg)
       local data = HttpService:JSONDecode(msg.Data)
       local targetId, reason = data.targetId, data.reason
        
       local plr = Players:GetPlayerByUserId(targetId)
       if not plr then return end
       plr:Kick(`You have been kicked for reason "{reason}"`)
   end)
 * @exampleData true
 * @exampleRawBody ""
 */
export async function publishMessage<Message extends string | AnyObject = string>(
  this: ThisAllOverrides, universeId: number, topic: string, message: Message
): ApiMethodResponse<"", true> {
  const overrides = this
  return BaseHandler(async function(this: ThisProfile) {
    const { data:rawBody, response, cachedResultType:cache } = await this.http.post<any>(
      `${baseUrl}/v1/universes/${universeId}/topics/${topic}`, {
        body: { message: JSON.stringify(message) },
        cacheSettings: this.cacheAdapter && (getCacheSettingsOverride(overrides) || await this.findSettings(apiName, "publishMessage")),
        credentialsOverride: getCredentialsOverride(overrides)
      }
    )

    return buildResponse({ rawBody, data: true as true, response, cache })
  }, [])
}