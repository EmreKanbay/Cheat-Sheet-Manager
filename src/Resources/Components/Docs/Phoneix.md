### Installation

1. **Install Elixir**:

   - Follow the instructions on the [Elixir website](https://elixir-lang.org/install.html) to install Elixir.

2. **Install Phoenix**:

   - First, install the Phoenix archive:
     ```bash
     mix archive.install hex phx_new
     ```

3. **Create a New Phoenix Project**:

   ```bash
   mix phx.new my_app
   cd my_app
   ```

4. **Install Dependencies**:

   ```bash
   mix deps.get
   ```

5. **Set Up the Database**:

   - Configure your database settings in `config/dev.exs`.
   - Create and migrate the database:
     ```bash
     mix ecto.create
     mix ecto.migrate
     ```

6. **Start the Phoenix Server**:
   ```bash
   mix phx.server
   ```

### Cheat Sheet

#### Project Structure

- **Directory Layout**:
  ```
  my_app/
      config/
      lib/
          my_app/
              web/
                  controllers/
                  templates/
                  views/
      priv/
      test/
  ```

#### Generators

- **Generate HTML Resource**:

  ```bash
  mix phx.gen.html Blog Post posts title:string body:text
  ```

- **Generate JSON Resource**:

  ```bash
  mix phx.gen.json Blog Post posts title:string body:text
  ```

- **Generate Context**:

  ```bash
  mix phx.gen.context Blog Post posts title:string body:text
  ```

- **Generate Schema**:
  ```bash
  mix phx.gen.schema Blog.Post posts title:string body:text
  ```

#### Database

- **Create Database**:

  ```bash
  mix ecto.create
  ```

- **Migrate Database**:

  ```bash
  mix ecto.migrate
  ```

- **Rollback Migration**:
  ```bash
  mix ecto.rollback
  ```

#### Routes

- **View Routes**:

  ```bash
  mix phx.routes
  ```

- **Define Routes**:

  ```elixir
  # lib/my_app_web/router.ex
  scope &quot;/&quot;, MyAppWeb do
    pipe_through :browser

    get &quot;/&quot;, PageController, :index
    resources &quot;/posts&quot;, PostController
  end
  ```

#### Controllers

- **Create a Controller**:

  ```elixir
  defmodule MyAppWeb.PostController do
    use MyAppWeb, :controller

    alias MyApp.Blog
    alias MyApp.Blog.Post

    def index(conn, _params) do
      posts = Blog.list_posts()
      render(conn, &quot;index.html&quot;, posts: posts)
    end

    def show(conn, %{&quot;id&quot; => id}) do
      post = Blog.get_post!(id)
      render(conn, &quot;show.html&quot;, post: post)
    end
  end
  ```

#### Views

- **Create a View**:
  ```elixir
  defmodule MyAppWeb.PostView do
    use MyAppWeb, :view
  end
  ```

#### Templates

- **Create a Template**:
  - Place your HTML files in the `lib/my_app_web/templates` directory.
  - Example: `lib/my_app_web/templates/post/index.html.eex`
  ```html
  <h1>Listing Posts</h1>
  <ul>
  	<%= for post <- @posts do %>
  	<li><%= post.title %></li>
  	<% end %>
  </ul>
  ```

#### Channels

- **Create a Channel**:

  ```elixir
  defmodule MyAppWeb.RoomChannel do
    use MyAppWeb, :channel

    def join(&quot;room:lobby&quot;, _message, socket) do
      {:ok, socket}
    end

    def handle_in(&quot;new_msg&quot;, %{&quot;body&quot; => body}, socket) do
      broadcast!(socket, &quot;new_msg&quot;, %{body: body})
      {:noreply, socket}
    end
  end
  ```

- **Add Channel to Endpoint**:
  ```elixir
  # lib/my_app_web/endpoint.ex
  socket &quot;/socket&quot;, MyAppWeb.UserSocket,
    websocket: true,
    longpoll: false
  ```

#### Testing

- **Run Tests**:

  ```bash
  mix test
  ```

- **Generate Test Files**:
  ```bash
  mix phx.gen.html Blog Post posts title:string body:text --no-context --no-schema
  ```
