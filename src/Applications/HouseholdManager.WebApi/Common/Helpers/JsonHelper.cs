using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace HouseholdManager.WebApi.Common.Helpers
{
	static class JsonHelper
	{
		public static JsonSerializerSettings ApplyDefaultSettings(this JsonSerializerSettings target)
		{
			target.ContractResolver = new CamelCasePropertyNamesContractResolver();
			return target;
		}

		public static JsonSerializerSettings GetDefaultSettings()
		{
			return new JsonSerializerSettings().ApplyDefaultSettings();
		}
	}
}
