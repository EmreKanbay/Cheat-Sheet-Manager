### How to Install Ruby on Rails

1. **Install Ruby**:

   - Download and install Ruby from the [official website](https://www.ruby-lang.org/en/downloads/).
   - Verify the installation by running `ruby -v` in your terminal.

2. **Install Rails**:

   - Open your terminal and run the following command:
     ```sh
     gem install rails
     ```
   - Verify the installation by running `rails -v`.

3. **Set Up a New Rails Project**:
   - Create a new Rails application by running:
     ```sh
     rails new myapp
     ```
   - Navigate into your project directory:
     ```sh
     cd myapp
     ```
   - Start the Rails server:
     ```sh
     rails server
     ```
   - Open your browser and go to `http://localhost:3000` to see your new Rails app.

### Ruby on Rails Cheat Sheet

#### Rails CLI Commands

- **Create a new Rails app**:

  ```sh
  rails new app_name
  ```

- **Start the Rails server**:

  ```sh
  rails server
  ```

- **Generate a controller**:

  ```sh
  rails generate controller ControllerName action1 action2
  ```

- **Generate a model**:

  ```sh
  rails generate model ModelName field1:type field2:type
  ```

- **Run database migrations**:

  ```sh
  rails db:migrate
  ```

- **Open Rails console**:
  ```sh
  rails console
  ```

#### Models

- **Creating a model**:

  ```sh
  rails generate model Article title:string body:text
  ```

- **Validations**:

  ```ruby
  class Article < ApplicationRecord
    validates :title, presence: true
    validates :body, length: { minimum: 10 }
  end
  ```

- **Associations**:

  ```ruby
  class Article < ApplicationRecord
    has_many :comments
  end

  class Comment < ApplicationRecord
    belongs_to :article
  end
  ```

#### Controllers

- **Creating a controller**:

  ```sh
  rails generate controller Articles index show new edit
  ```

- **Basic controller actions**:

  ```ruby
  class ArticlesController < ApplicationController
    def index
      @articles = Article.all
    end

    def show
      @article = Article.find(params[:id])
    end

    def new
      @article = Article.new
    end

    def create
      @article = Article.new(article_params)
      if @article.save
        redirect_to @article
      else
        render 'new'
      end
    end

    private

    def article_params
      params.require(:article).permit(:title, :body)
    end
  end
  ```

#### Views

- **ERB Templates**:

  ```erb
  <!-- app/views/articles/index.html.erb -->
  <h1>Articles</h1>
  <%= link_to 'New Article', new_article_path %>
  <ul>
    <% @articles.each do |article| %>
      <li>
        <%= link_to article.title, article_path(article) %>
      </li>
    <% end %>
  </ul>
  ```

- **Form Helpers**:

  ```erb
  <!-- app/views/articles/_form.html.erb -->
  <%= form_with(model: @article, local: true) do |form| %>
    <% if @article.errors.any? %>
      <div id="error_explanation">
        <h2><%= pluralize(@article.errors.count, "error") %> prohibited this article from being saved:</h2>
        <ul>
          <% @article.errors.full_messages.each do |message| %>
            <li><%= message %></li>
          <% end %>
        </ul>
      </div>
    <% end %>

    <div class="field">
      <%= form.label :title %>
      <%= form.text_field :title %>
    </div>

    <div class="field">
      <%= form.label :body %>
      <%= form.text_area :body %>
    </div>

    <div class="actions">
      <%= form.submit %>
    </div>
  <% end %>
  ```

#### Routes

- **Basic routes**:

  ```ruby
  Rails.application.routes.draw do
    resources :articles
    root 'articles#index'
  end
  ```

- **Custom routes**:
  ```ruby
  Rails.application.routes.draw do
    get 'about', to: 'pages#about'
  end
  ```

#### Database

- **Migrations**:

  ```sh
  rails generate migration AddPublishedToArticles published:boolean
  ```

- **Running migrations**:

  ```sh
  rails db:migrate
  ```

- **Rolling back migrations**:
  ```sh
  rails db:rollback
  ```
