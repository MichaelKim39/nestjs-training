# Controllers
Nest employs 2 options for manipulating responses
- Standard
  - Recommended; 
  - JS objects and arrays are automaticalled JSON serialised 
  - JS Primitivies are not serialised
- Library Specific
  - E.g. Express response object using @Res decorator

See a list of decorators and the platform specific objecsts they represent [here](https://docs.nestjs.com/controllers)

@All decorator targets all HTTP method