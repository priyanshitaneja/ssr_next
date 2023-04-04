import React from "react";
import Link from "next/link"
import styles from "./index.module.css";
import Card from "./Card";
import { initStore, initialCards, addItems } from "../store";

class Index extends React.Component {
  static async getInitialProps({ store }) {
    // return { cards: data }; 
    /* the code is returning an object with a property called "cards" 
    whose value is set to the imported data.
    The {cards: data} syntax is a shorthand way of creating an object
    where the property key is "cards" and its value is the "data" variable
    that contains the imported JSON data. */

    return store.dispatch(initialCards());
  }
  /*
  This code snippet is from a Next.js application 
  and it defines a static async method getInitialProps() 
  which is used to fetch data and pass it as props to a React component 
  before it is rendered on the client-side.

  It is executed on the server-side when the page is first loaded or requested.
  It can fetch data from various sources like a REST API, a database, or any other data source
  and returns an object containing the data as props.

  The data returned by getInitialProps() is then passed as props 
  to the corresponding React component which can use it to render the content. 
  This approach helps improve the performance of the application 
  by reducing the number of requests made to fetch data on the client-side.

  Note: The getInitialProps() method is only available in Next.js version 9.3 or older.
  In newer versions, it has been replaced by getStaticProps() or getServerSideProps().
  */

  render () {
    return (
      <div className={styles.app}>
        {/* <h1>hi</h1> */}
        <header className={styles.header}>
          <Link href="/page3">
            <img src="/logo.png" className={styles.logo} alt="logo" />
          </Link>
        </header>
        <div className={styles.grid}>
          {
            this.props.cards.map((card) => (
              <Card key={card.id} />
            ))
          }
        </div>
      </div>
    );
  };
};

export default initStore.withRedux(Index);
/* The code is creating a higher-order component (HOC) 
using the withRedux() function from the next-redux-wrapper package.
An HOC is a function that takes a component as an argument and 
returns a new component with added functionality. 
In this case, the added functionality is the ability to interact with the Redux store.

The initStore module is a custom Redux store that contains 
all of the application's reducers and middleware.
A reducer is a function that determines how the application's state changes in 
response to an action. Middleware is code that intercepts and modifies the application's actions and state.

The HOC created by the code wraps the "Index" component, 
which is the main component being rendered by the application. 
By wrapping the "Index" component with the HOC, 
the "Index" component gains access to the Redux store via props. 
This allows the "Index" component to read and modify the application's state.

Overall, the code is setting up the Redux store and 
connecting it to the main component of the application,
allowing the component to access and modify the application's state using Redux.
*/