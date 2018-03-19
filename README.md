# Birds Supply Portal

This app aims at providing a platform for suppliers to provision/manage their products.

### How to run the app

#### Install Dependencies
* You need clone [Birds Supply Server](https://github.com/DavidHe1127/birds-supply-server) and run it in the terminal.
* After install app-level dependencies via `npm i` you also need to install [get-graphql-schema](https://github.com/graphcool/get-graphql-schema) globally to fetch latest schema from the server.



### TODOs
* Add authentications (login, logout done to do signup)
* Show qty on product card
* Add optimistic update
* Add pagination
* Add validation
* Design wireframe

### Assumptions
* Suppliers can only see their own products
* Each parrot species can only have one product linked to it under each supplier
* Lodge a request if parrot species does not exist in the current system

### issues
* Failed to remove the node from products connection
