# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Similarities

1. High-Level Languages - Both are high-level programming languages designed to be easy for humans to read and write.
2. Object-Oriented - Both are object-oriented which use objects and classes in programming.
3. Interpreted Languages - Their code is executed line by line by an interpreter.

Differences

1. Use Cases - JavaScript is primarily used for web development and Ruby is often used for backend development and scripting.
2. Syntax - JavaScript uses curly braces {} for blocks, whereas Ruby uses the do..end construct.
3. Execution Environment - JavaScript is executed in web browsers and Ruby is executed on the server side using frameworks like Ruby on Rails.

Researched answer:

2. What does it mean to implement a TDD workflow?

Your answer: Implementing a Test-Driven Development workflow is a development process where tests are written before the actual code.

Researched answer: Implementing a Test-Driven Development (TDD) workflow involves writing tests before the actual code, executing the tests to ensure they fail, implementing the minimum code required to pass the tests, running all existing tests to check for any breakages, refactoring the code if necessary to improve maintainability, and repeating this cycle for each new feature or modification. TDD aims to catch and fix bugs early, ensure testability, and provide documentation for the intended usage of the code.

3. What is a block in Ruby?

Your answer: A block in Ruby is a chunk of code enclosed between either braces {} or do..end. Blocks can be attached to method calls which provide a way to execute a set of statements within that method. 

Researched answer: In Ruby, a block is a way to group statements into a single unit. It is not an object like a proc or lambda, but it can be passed to methods that yield control to the block. Blocks are used for various purposes, including defining anonymous functions, creating iterators, and implementing custom control flow within a method. The syntax for a block can be either braces {} or do..end, and it is commonly associated with methods that accept a block using the yield keyword.

4. STRETCH: What is a version manager?

Answer: A version manager is a tool that allows us to install, manage, and switch between different versions of programming languages or frameworks on our system. It aloows us to work with multiple versions of software by providing an isolated environment for each project. This ensures a project can use specific language or framework versions even if a different default version is installed.

## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. Database migrations: Database migrations refer to the management and version control of database schema changes over time. In the context of software development, especially web development, a migration is a way to evolve the database schema (structure) while preserving existing data. Migrations include operations such as creating or modifying tables, adding or removing columns, and applying data transformations. The primary purpose of database migrations is to keep the database schema in sync with the evolving requirements of the application. Migrations provide a systematic way to make changes to the database structure without losing existing data or disrupting the application's functionality. They are an integral part of many web frameworks and ORMs (Object-Relational Mapping) tools.

2. Model validations: Model validations are rules or conditions applied to the data stored in the models of an application. In the context of web development, particularly in MVC (Model-View-Controller) frameworks, models represent the application's data structure. Validations ensure that the data entered into these models meets certain criteria or constraints before it is saved to the database. The purpose of model validations is to maintain data integrity and consistency by enforcing specific rules on the data stored in the application's models. These rules can include requirements such as presence, format, length, uniqueness, and custom conditions. Validations help prevent invalid or inconsistent data from being persisted to the database, ensuring that the data adheres to the defined standards.

3. Params: "Params" is a shortened form of the term "parameters" and is commonly used in web development to refer to parameters passed to a web server or a web application. These parameters are typically included in the URL (query parameters) or in the body of an HTTP request and provide information that can be used by the server or application to process the request. The purpose of params is to allow clients (such as web browsers or mobile apps) to send additional information to the server when making HTTP requests. This information can include user input, configuration settings, or any data relevant to the request. On the server side, developers can access and use these parameters to customize the behavior of the application or to retrieve specific data from a database.
