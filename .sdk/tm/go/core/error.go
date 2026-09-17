package core

type HubspotMetaError struct {
	IsHubspotMetaError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHubspotMetaError(code string, msg string, ctx *Context) *HubspotMetaError {
	return &HubspotMetaError{
		IsHubspotMetaError: true,
		Sdk:              "HubspotMeta",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HubspotMetaError) Error() string {
	return e.Msg
}
