var searchIndex = JSON.parse('{\
"lambda":{"doc":"The mechanism available for defining a Lambda function is …","i":[[3,"Context","lambda","The Lambda function execution context. The values in this …",null,null],[12,"request_id","","The AWS request ID generated by the Lambda service.",0,null],[12,"deadline","","The execution deadline for the current invocation in …",0,null],[12,"invoked_function_arn","","The ARN of the Lambda function being invoked.",0,null],[12,"xray_trace_id","","The X-Ray trace ID for the current invocation.",0,null],[12,"client_context","","The client context object sent by the AWS mobile SDK. …",0,null],[12,"identity","","The Cognito identity that invoked the function. This …",0,null],[12,"env_config","","Lambda function configuration from the local environment …",0,null],[3,"Config","","Configuration derived from environment variables.",null,null],[12,"endpoint","","The host and port of the runtime API.",1,null],[12,"function_name","","The name of the function.",1,null],[12,"memory","","The amount of memory available to the function in MB.",1,null],[12,"version","","The version of the function being executed.",1,null],[12,"log_stream","","The name of the Amazon CloudWatch Logs stream for the …",1,null],[12,"log_group","","The name of the Amazon CloudWatch Logs group for the …",1,null],[11,"from_env","","Attempts to read configuration from environment variables.",1,[[],[["box",3],["result",4]]]],[8,"Handler","","A trait describing an asynchronous function <code>A</code> to <code>B</code>.",null,null],[16,"Error","","Errors returned by this handler.",2,null],[16,"Fut","","Response of this handler.",2,null],[10,"call","","Handle the incoming event.",2,[[["context",3]]]],[5,"handler_fn","","Returns a new <code>HandlerFn</code> with the given closure.",null,[[],["handlerfn",3]]],[3,"HandlerFn","","A <code>Handler</code> implemented by a closure.",null,null],[5,"run","","Starts the Lambda Rust runtime and begins polling for …",null,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"call","","",3,[[["context",3]]]],[11,"clone","","",0,[[],["context",3]]],[11,"clone","","",1,[[],["config",3]]],[11,"clone","","",3,[[],["handlerfn",3]]],[11,"default","","",0,[[],["context",3]]],[11,"default","","",1,[[],["config",3]]],[11,"eq","","",0,[[["context",3]]]],[11,"ne","","",0,[[["context",3]]]],[11,"eq","","",1,[[["config",3]]]],[11,"ne","","",1,[[["config",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"try_from","","",0,[[["headermap",3]],["result",4]]]],"p":[[3,"Context"],[3,"Config"],[8,"Handler"],[3,"HandlerFn"]]},\
"lambda_http":{"doc":"Enriches the <code>lambda</code> crate with <code>http</code> types targeting AWS …","i":[[3,"Response","lambda_http","Represents an HTTP response",null,null],[3,"Context","","The Lambda function execution context. The values in this …",null,null],[12,"request_id","","The AWS request ID generated by the Lambda service.",0,null],[12,"deadline","","The execution deadline for the current invocation in …",0,null],[12,"invoked_function_arn","","The ARN of the Lambda function being invoked.",0,null],[12,"xray_trace_id","","The X-Ray trace ID for the current invocation.",0,null],[12,"client_context","","The client context object sent by the AWS mobile SDK. …",0,null],[12,"identity","","The Cognito identity that invoked the function. This …",0,null],[12,"env_config","","Lambda function configuration from the local environment …",0,null],[0,"ext","","Extension methods for <code>http::Request</code> types",null,null],[4,"PayloadError","lambda_http::ext","Request payload deserialization errors",null,null],[13,"Json","","Returned when <code>application/json</code> bodies fail to deserialize …",1,null],[13,"WwwFormUrlEncoded","","Returned when <code>application/x-www-form-urlencoded</code> bodies …",1,null],[8,"RequestExt","","Extentions for <code>lambda_http::Request</code> structs that provide …",null,null],[10,"query_string_parameters","","Return pre-parsed http query string parameters, parameters…",2,[[],["strmap",3]]],[10,"with_query_string_parameters","","Configures instance with query string parameters under #[…",2,[[]]],[10,"path_parameters","","Return pre-extracted path parameters, parameter provided …",2,[[],["strmap",3]]],[10,"with_path_parameters","","Configures instance with path parameters under #[cfg(test)…",2,[[]]],[10,"stage_variables","","Return stage variables associated with the API gateway …",2,[[],["strmap",3]]],[10,"request_context","","Return request context data assocaited with the ALB or …",2,[[],["requestcontext",4]]],[10,"payload","","Return the Result of a payload parsed into a serde …",2,[[],[["result",4],["payloaderror",4],["option",4]]]],[0,"request","lambda_http","ALB and API Gateway request adaptations",null,null],[3,"ApiGatewayV2RequestContext","lambda_http::request","See context-variable-reference for more detail.",null,null],[12,"account_id","","The API owner\'s AWS account ID.",3,null],[12,"api_id","","The identifier API Gateway assigns to your API.",3,null],[12,"authorizer","","The stringified value of the specified key-value pair of …",3,null],[12,"domain_name","","The full domain name used to invoke the API. This should …",3,null],[12,"domain_prefix","","The first label of the $context.domainName. This is often …",3,null],[12,"http","","The HTTP method used.",3,null],[12,"request_id","","The ID that API Gateway assigns to the API request.",3,null],[12,"route_key","","Undocumented, could be resourcePath",3,null],[12,"stage","","The deployment stage of the API request (for example, …",3,null],[12,"time","","Undocumented, could be requestTime",3,null],[12,"time_epoch","","Undocumented, could be requestTimeEpoch",3,null],[3,"ApiGatewayRequestContext","","See context-variable-reference for more detail.",null,null],[12,"account_id","","The API owner\'s AWS account ID.",4,null],[12,"resource_id","","The identifier that API Gateway assigns to your resource.",4,null],[12,"stage","","The deployment stage of the API request (for example, …",4,null],[12,"request_id","","The ID that API Gateway assigns to the API request.",4,null],[12,"resource_path","","The path to your resource. For example, for the non-proxy …",4,null],[12,"http_method","","The HTTP method used. Valid values include: DELETE, GET, …",4,null],[12,"authorizer","","The stringified value of the specified key-value pair of …",4,null],[12,"api_id","","The identifier API Gateway assigns to your API.",4,null],[12,"identity","","Cofnito identity information",4,null],[3,"AlbRequestContext","","Elastic load balancer context information",null,null],[12,"elb","","Elastic load balancer context information",5,null],[4,"RequestContext","","Event request context as an enumeration of request …",null,null],[13,"ApiGatewayV2","","API Gateway v2 request context",6,null],[13,"ApiGateway","","API Gateway request context",6,null],[13,"Alb","","ALB request context",6,null],[3,"Elb","","Elastic load balancer context information",null,null],[12,"target_group_arn","","AWS ARN identifier for the ELB Target Group this lambda …",7,null],[3,"Http","","Http information captured API Gateway v2 request context",null,null],[12,"method","","The HTTP method used. Valid values include: DELETE, GET, …",8,null],[12,"path","","The request path. For example, for a non-proxy request …",8,null],[12,"protocol","","The request protocol, for example, HTTP/1.1.",8,null],[12,"source_ip","","The source IP address of the TCP connection making the …",8,null],[12,"user_agent","","The User-Agent header of the API caller.",8,null],[3,"Identity","","Identity assoicated with API Gateway request",null,null],[12,"source_ip","","The source IP address of the TCP connection making the …",9,null],[12,"cognito_identity_id","","The Amazon Cognito identity ID of the caller making the …",9,null],[12,"cognito_identity_pool_id","","The Amazon Cognito identity pool ID of the caller making …",9,null],[12,"cognito_authentication_provider","","A comma-separated list of the Amazon Cognito …",9,null],[12,"cognito_authentication_type","","The Amazon Cognito authentication type of the caller …",9,null],[12,"account_id","","The AWS account ID associated with the request.",9,null],[12,"caller","","The principal identifier of the caller making the request.",9,null],[12,"api_key","","For API methods that require an API key, this variable is …",9,null],[12,"access_key","","Undocumented. Can be the API key ID associated with an …",9,null],[12,"user","","The principal identifier of the user making the request. …",9,null],[12,"user_agent","","The User-Agent header of the API caller.",9,null],[12,"user_arn","","The Amazon Resource Name (ARN) of the effective user …",9,null],[5,"from_reader","","Deserializes a <code>Request</code> from a <code>Read</code> impl providing JSON …",null,[[],[["jsonerror",3],["request",6],["result",4]]]],[5,"from_str","","Deserializes a <code>Request</code> from a string of JSON text.",null,[[],[["jsonerror",3],["request",6],["result",4]]]],[4,"Body","lambda_http","Representation of http request and response bodies as …",null,null],[13,"Empty","","An empty body",10,null],[13,"Text","","A body containing string data",10,null],[13,"Binary","","A body containing binary data",10,null],[8,"IntoResponse","","A conversion of self into a <code>Response<Body></code> for various …",null,null],[10,"into_response","","Return a translation of <code>self</code> into a <code>Response<Body></code>",11,[[],[["body",4],["response",3]]]],[3,"StrMap","","A read-only view into a map of string data which may …",null,null],[6,"Request","","Type alias for <code>http::Request</code>s with a fixed <code>Body</code> type",null,null],[8,"Handler","","Functions serving as ALB and API Gateway REST and HTTP …",null,null],[16,"Error","","The type of Error that this Handler will return",12,null],[16,"Response","","The type of Response this Handler will return",12,null],[16,"Fut","","The type of Future this Handler will return",12,null],[10,"call","","Function used to execute handler behavior",12,[[["context",3],["request",6]]]],[5,"handler","","Adapts a <code>Handler</code> to the <code>lambda::run</code> interface",null,[[["handler",8]],[["handler",8],["adapter",3]]]],[3,"Adapter","","Exists only to satisfy the trait cover rule for …",null,null],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","lambda_http::ext","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","lambda_http::request","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","lambda_http","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"default","","",13,[[],["response",3]]],[11,"fmt","","",13,[[["formatter",3]],[["result",4],["error",3]]]],[11,"eq","","",0,[[["context",3]]]],[11,"ne","","",0,[[["context",3]]]],[11,"fmt","","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"try_from","","",0,[[["headervalue",3],["headermap",3]],[["result",4],["context",3]]]],[11,"default","","",0,[[],["context",3]]],[11,"clone","","",0,[[],["context",3]]],[11,"poll_data","","",13,[[["pin",3],["response",3],["context",3]],[["poll",4],["option",4]]]],[11,"poll_trailers","","",13,[[["pin",3],["response",3],["context",3]],[["result",4],["poll",4]]]],[11,"is_end_stream","","",13,[[]]],[11,"size_hint","","",13,[[],["sizehint",3]]],[11,"into_response","","",13,[[],[["body",4],["response",3]]]],[11,"call","","",15,[[["context",3],["request",6]]]],[11,"as_ref","","",10,[[]]],[11,"from","","",10,[[]]],[11,"from","","",10,[[]]],[11,"from","","",10,[[["string",3]]]],[11,"from","","",10,[[["cow",4]],["body",4]]],[11,"from","","",10,[[["cow",4]],["body",4]]],[11,"from","","",10,[[["vec",3]]]],[11,"from","","",10,[[]]],[11,"from","","",14,[[["vec",3],["hashmap",3],["string",3]]]],[11,"clone","lambda_http::request","",3,[[],["apigatewayv2requestcontext",3]]],[11,"clone","","",4,[[],["apigatewayrequestcontext",3]]],[11,"clone","","",5,[[],["albrequestcontext",3]]],[11,"clone","","",6,[[],["requestcontext",4]]],[11,"clone","","",7,[[],["elb",3]]],[11,"clone","","",8,[[],["http",3]]],[11,"clone","","",9,[[],["identity",3]]],[11,"clone","lambda_http","",14,[[]]],[11,"default","","",10,[[]]],[11,"default","lambda_http::request","",7,[[],["elb",3]]],[11,"default","","",8,[[],["http",3]]],[11,"default","","",9,[[],["identity",3]]],[11,"default","lambda_http","",14,[[],["strmap",3]]],[11,"eq","","",10,[[["body",4]]]],[11,"ne","","",10,[[["body",4]]]],[11,"eq","","",14,[[["strmap",3]]]],[11,"ne","","",14,[[["strmap",3]]]],[11,"deref","","",10,[[]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","lambda_http::ext","",1,[[["formatter",3]],["result",6]]],[11,"fmt","lambda_http::request","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","lambda_http","",14,[[["formatter",3]],["result",6]]],[11,"fmt","lambda_http::ext","",1,[[["formatter",3]],["result",6]]],[11,"source","","",1,[[],[["option",4],["error",8]]]],[11,"serialize","lambda_http","",10,[[],["result",4]]],[11,"deserialize","lambda_http::request","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"deserialize","","",6,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","lambda_http","",14,[[],[["strmap",3],["result",4]]]],[11,"builder","","Creates a new builder-style object to manufacture a …",13,[[],["builder",3]]],[11,"new","","Creates a new blank <code>Response</code> with the body",13,[[],["response",3]]],[11,"from_parts","","Creates a new <code>Response</code> with the given head and body",13,[[["parts",3]],["response",3]]],[11,"status","","Returns the <code>StatusCode</code>.",13,[[],["statuscode",3]]],[11,"status_mut","","Returns a mutable reference to the associated <code>StatusCode</code>.",13,[[],["statuscode",3]]],[11,"version","","Returns a reference to the associated version.",13,[[],["version",3]]],[11,"version_mut","","Returns a mutable reference to the associated version.",13,[[],["version",3]]],[11,"headers","","Returns a reference to the associated header field map.",13,[[],["headermap",3]]],[11,"headers_mut","","Returns a mutable reference to the associated header …",13,[[],["headermap",3]]],[11,"extensions","","Returns a reference to the associated extensions.",13,[[],["extensions",3]]],[11,"extensions_mut","","Returns a mutable reference to the associated extensions.",13,[[],["extensions",3]]],[11,"body","","Returns a reference to the associated HTTP body.",13,[[]]],[11,"body_mut","","Returns a mutable reference to the associated HTTP body.",13,[[]]],[11,"into_body","","Consumes the response, returning just the body.",13,[[]]],[11,"into_parts","","Consumes the response returning the head and body parts.",13,[[]]],[11,"map","","Consumes the response returning a new response with body …",13,[[],["response",3]]],[11,"get","","Return a named value where available. If there is more …",14,[[],["option",4]]],[11,"get_all","","Return all values associated with name where available",14,[[],[["option",4],["vec",3]]]],[11,"is_empty","","Return true if the underlying map is empty",14,[[]]],[11,"iter","","Return an iterator over keys and values",14,[[],["strmapiter",3]]]],"p":[[3,"Context"],[4,"PayloadError"],[8,"RequestExt"],[3,"ApiGatewayV2RequestContext"],[3,"ApiGatewayRequestContext"],[3,"AlbRequestContext"],[4,"RequestContext"],[3,"Elb"],[3,"Http"],[3,"Identity"],[4,"Body"],[8,"IntoResponse"],[8,"Handler"],[3,"Response"],[3,"StrMap"],[3,"Adapter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);