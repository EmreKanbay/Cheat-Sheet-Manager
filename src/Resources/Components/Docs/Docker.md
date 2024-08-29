## Docker Cheat Sheet

#### **Setup & Configuration**

- **`docker --version`**: Shows the Docker version installed on your system.
- **`docker info`**: Displays system-wide information about Docker.

#### **Images**

- **`docker build -t [image_name] .`**: Builds an image from a Dockerfile in the current directory.
- **`docker images`**: Lists all Docker images on your local machine.
- **`docker rmi [image_name]`**: Removes a Docker image.
- **`docker image prune`**: Removes all unused images.

#### **Containers**

- **`docker run [image_name]`**: Creates and starts a container from an image.
- **`docker run -d [image_name]`**: Runs a container in detached mode (in the background).
- **`docker run -p [host_port]:[container_port] [image_name]`**: Maps a container’s port to a host port.
- **`docker ps`**: Lists all running containers.
- **`docker ps -a`**: Lists all containers, including stopped ones.
- **`docker stop [container_id]`**: Stops a running container.
- **`docker rm [container_id]`**: Removes a stopped container.
- **`docker exec -it [container_id] /bin/bash`**: Opens a shell inside a running container.

#### **Volumes**

- **`docker volume create [volume_name]`**: Creates a new volume.
- **`docker volume ls`**: Lists all Docker volumes.
- **`docker volume rm [volume_name]`**: Removes a Docker volume.

#### **Networks**

- **`docker network create [network_name]`**: Creates a new network.
- **`docker network ls`**: Lists all Docker networks.
- **`docker network rm [network_name]`**: Removes a Docker network.
- **`docker network inspect [network_name]`**: Displays detailed information about a network.

#### **Docker Compose**

- **`docker-compose up`**: Builds, (re)creates, starts, and attaches to containers for a service defined in a `docker-compose.yml` file.
- **`docker-compose down`**: Stops and removes containers, networks, images, and volumes defined in a `docker-compose.yml` file.
- **`docker-compose ps`**: Lists containers for a Docker Compose project.

#### **Docker Hub**

- **`docker login`**: Logs into Docker Hub.
- **`docker pull [image_name]`**: Pulls an image from Docker Hub.
- **`docker push [image_name]`**: Pushes an image to Docker Hub.

## Dockerfile Cheat Sheet

#### **Basic Commands**

- **`FROM [image]`**: Sets the base image for subsequent instructions. Every Dockerfile must start with a `FROM` instruction.
- **`LABEL key=value`**: Adds metadata to an image. Useful for describing the image, version, author, etc.
- **`MAINTAINER [name]`**: Specifies the author of the image (deprecated in favor of `LABEL`).

#### **File Operations**

- **`COPY [source] [destination]`**: Copies new files or directories from the source on the host to the destination in the container.
- **`ADD [source] [destination]`**: Similar to `COPY`, but also supports URLs and tar file extraction.

#### **Environment Configuration**

- **`ENV [key] [value]`**: Sets environment variables.
- **`ARG [name]`**: Defines a variable that users can pass at build-time to the builder with the `docker build` command.

#### **Running Commands**

- **`RUN [command]`**: Executes a command in a new layer on top of the current image and commits the results. Often used to install software packages.
- **`CMD ["executable","param1","param2"]`**: Provides defaults for an executing container. There can only be one `CMD` instruction in a Dockerfile.
- **`ENTRYPOINT ["executable","param1","param2"]`**: Configures a container that will run as an executable.

#### **Networking**

- **`EXPOSE [port]`**: Informs Docker that the container listens on the specified network ports at runtime.
- **`HEALTHCHECK [options] CMD [command]`**: Tells Docker how to test a container to check that it is still working.

#### **Volumes**

- **`VOLUME ["/data"]`**: Creates a mount point with the specified path and marks it as holding externally mounted volumes from native host or other containers.

#### **User & Permissions**

- **`USER [username or UID]`**: Sets the user name or UID to use when running the image and for any `RUN`, `CMD`, and `ENTRYPOINT` instructions that follow it.
- **`WORKDIR [path]`**: Sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions that follow it.

#### **Best Practices**

- **`ONBUILD [INSTRUCTION]`**: Adds a trigger instruction to the image that will be executed when the image is used as the base for another build.
- **`STOPSIGNAL [signal]`**: Sets the system call signal that will be sent to the container to exit.
