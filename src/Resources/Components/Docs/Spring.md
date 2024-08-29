### Installing Spring

#### Prerequisites

- **Java Development Kit (JDK)**: Ensure you have JDK 8 or later installed.
- **Maven or Gradle**: These build tools are commonly used with Spring.

#### Installation Steps

1. **Using Spring Initializr**:

   - Visit [Spring Initializr](https://start.spring.io/).
   - Select your project settings (e.g., Maven/Gradle, language, Spring Boot version).
   - Add dependencies as needed.
   - Click &quot;Generate&quot; to download the project.
   - Extract the downloaded zip file and open it in your IDE.

2. **Using Spring Boot CLI**:
   - **Manual Installation**:
     - Download the Spring Boot CLI from the [Spring website](https://spring.io/tools).
     - Extract the zip file and add the `bin` directory to your system's PATH.
   - **Using SDKMAN!**:
     - Install SDKMAN! by running:
       ```sh
       curl -s &quot;https://get.sdkman.io&quot; | bash
       ```
     - Install Spring Boot CLI:
       ```sh
       sdk install springboot
       ```

### Spring Cheat Sheet

#### Core Annotations

- **@Configuration**: Marks a class as a source of bean definitions.
- **@ComponentScan**: Configures component scanning directives for use with `@Configuration` classes.
- **@Bean**: Indicates that a method produces a bean to be managed by the Spring container.
- **@Autowired**: Marks a constructor, field, setter method, or config method to be autowired by Spring's dependency injection.
- **@Component**: Indicates that an annotated class is a &quot;component&quot;.
- **@Service**: Specialization of `@Component` for service layer.
- **@Repository**: Specialization of `@Component` for persistence layer.
- **@Controller**: Specialization of `@Component` for presentation layer (MVC).

#### Spring Boot Annotations

- **@SpringBootApplication**: Combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.
- **@EnableAutoConfiguration**: Enables Spring Boot’s auto-configuration mechanism.
- **@RestController**: Combines `@Controller` and `@ResponseBody`.

#### Spring MVC Annotations

- **@RequestMapping**: Maps HTTP requests to handler methods of MVC and REST controllers.
- **@GetMapping**: Shortcut for `@RequestMapping(method = RequestMethod.GET)`.
- **@PostMapping**: Shortcut for `@RequestMapping(method = RequestMethod.POST)`.
- **@PutMapping**: Shortcut for `@RequestMapping(method = RequestMethod.PUT)`.
- **@DeleteMapping**: Shortcut for `@RequestMapping(method = RequestMethod.DELETE)`.
- **@RequestParam**: Binds a web request parameter to a method parameter.
- **@PathVariable**: Binds a URI template variable to a method parameter.
- **@RequestBody**: Binds the body of a web request to a method parameter.
- **@ResponseBody**: Indicates that the return value of a method should be used as the response body.

#### Commonly Used Classes

- **ApplicationContext**: Central interface to provide configuration for an application.
- **BeanFactory**: Root interface for accessing a Spring bean container.
- **RestTemplate**: Synchronous client to perform HTTP requests.
- **JdbcTemplate**: Simplifies JDBC operations.

#### Useful Commands

- **Run Spring Boot Application**:

  ```sh
  mvn spring-boot:run
  ```

  or

  ```sh
  gradle bootRun
  ```

- **Build Project**:
  ```sh
  mvn clean install
  ```
  or
  ```sh
  gradle build
  ```
