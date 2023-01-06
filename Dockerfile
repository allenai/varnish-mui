# We can't use alpine because a dependency in MUI's stack needs Python. Bullseye
# includes Python by default.
FROM node:19-bullseye

# Normally we'd copy over the package.json and yarn.lock file, and install
# dependencies in a separate step. This makes builds faster that don't update
# dependencies. But the repo uses an intricate web of yarn workspaces, all of
# which have a separate package.json. Rather than copying those individually,
# we copy over the entire source code. This means builds might be a bit slower
# than they could otherwise be.
COPY . .
RUN yarn install --frozen-lockfile

RUN yarn docs:build

EXPOSE 3000
ENTRYPOINT [ "yarn" ]
CMD [ "docs:start" ]
