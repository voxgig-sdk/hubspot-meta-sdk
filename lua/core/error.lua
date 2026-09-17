-- HubspotMeta SDK error

local HubspotMetaError = {}
HubspotMetaError.__index = HubspotMetaError


function HubspotMetaError.new(code, msg, ctx)
  local self = setmetatable({}, HubspotMetaError)
  self.is_sdk_error = true
  self.sdk = "HubspotMeta"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HubspotMetaError:error()
  return self.msg
end


function HubspotMetaError:__tostring()
  return self.msg
end


return HubspotMetaError
