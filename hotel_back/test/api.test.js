//ENDPOINTS
/**
 * # From Users
 */
const RegisterUser = "http://localhost:1337/tokyo-hotel/api/v1/register"
const CreateUser = "http://localhost:1337/tokyo-hotel/api/v1/ld"
const GetUser = "http://localhost:1337/tokyo-hotel/api/v1/get-a-user"
const GetAllUsers = "http://localhost:1337/tokyo-hotel/api/v1/get-all-users"
const UpdateUser = "http://localhost:1337/tokyo-hotel/api/v1/update-a-user"
const DeleteUser = "http://localhost:1337/tokyo-hotel/api/v1/delete-a-user"

/**
 * # From Books
 */
const getBook = "http://localhost:1337/tokyo-hotel/api/v1/get-a-book"
const getAllBooks = "http://localhost:1337/tokyo-hotel/api/v1/get-all-books"
const createBook = "http://localhost:1337/tokyo-hotel/api/v1/create-a-book"
const updateBook = "http://localhost:1337/tokyo-hotel/api/v1/update-a-book"
const deleteBook = "http://localhost:1337/tokyo-hotel/api/v1/delete-a-book"

//----------------------BOOKS TEST SECTION ------------------------

test("should return all books that exists if exists from DB", async () => {

    const data = await fetch(getAllBooks)
    const books = await data.json();

    expect(books).not.toBe({
        title: "",
        subtitle: "",
        author: "",
        published: "",
        publisher: "",
        pages: 0,
        description: "",
        website: "",
        category: "[]",
    })
})

test("should return a user from DB", async () => {
      
})