import "./styles.css"
import { Book, BookInformation, Review, User } from "./lib/types";
import { getBooks, getUsers, getReviews } from "./lib/api";
import { useEffect, useState, FC } from "react";
import Card from "./Card";

// Техническое задание:
// Доработать приложение App, чтобы в отрисованном списке
// были реальные отзывы, автор книги и автор отзыва.
// Данные об отзывах и пользователях можно получить при помощи асинхронных
// функций getUsers, getReviews

// функция getBooks возвращает Promise<Book[]>
// функция getUsers возвращает Promise<User[]>
// функция getReviews возвращает Promise<Review[]>

// В объектах реализующих интерфейс Book указаны только uuid
// пользователей и обзоров

// // В объектах реализующих интерфейс BookInformation, ReviewInformation
// указана полная информация об пользователе и обзоре.



const App: FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setusers] = useState<User[]>([])
  const [reviews, setreviews] = useState<Review[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedBooks = await getBooks();
      const fetchedUsers = await getUsers();
      const fetchedReviews = await getReviews();
      setBooks(fetchedBooks);
      setusers(fetchedUsers)
      setreviews(fetchedReviews)
      setIsLoading(false);
    };
    fetchData();
  }, []);



  const toBookInformation = (book: Book): BookInformation => {

    let author = users.find((user) => user.id === book.authorId)
    let author_name = author ? author.name : "Test Author";
    let bookReview = reviews.find((review) => book.reviewIds[0] === review.id)
    let authorReview = users.find((user) => user.id === bookReview?.userId)

    return {
      id: book.id,
      name: book.name || "Книга без названия",
      author: { name: author_name, id: book.authorId },
      reviews: [
        { id: bookReview ? bookReview.id : "test", text: bookReview ? bookReview.text : "test text", user: { id: authorReview ? authorReview.id : 'sdf', name: authorReview ? authorReview.name : "test" } }
      ],
      description: book.description
    };
  };

  return (
    <div>
      <h1>Мои книги:</h1>
      {isLoading && <div>Загрузка...</div>}
      {!isLoading &&
        books.map((b) =>
          <Card key={b.id} book={toBookInformation(b)} />)
      }
    </div>
  );
};

export default App;