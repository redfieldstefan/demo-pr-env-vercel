import Head from 'next/head'
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import Todo from '../src/components/todo';
import fetch from '../src/utils/fetch';
import styled from "styled-components";
import { format } from 'date-fns'

const setRandomOffset = () => {
  const DAY_IN_MS = 1000 * 60 * 60 * 24;
  const isHeads = (Math.random() * 100) > 50 ? true : false
  const randomHourOffset = Math.random() * DAY_IN_MS;
  const now = Date.now();
  const dateOffset = new Date(isHeads ? now + randomHourOffset : now - randomHourOffset);

  return {
    // readable: `${dateOffset.getDay()}/${dateOffset.getMonth()}/${dateOffset.getDate()} ${dateOffset.getHours()}:${dateOffset.getMinutes()}`,
    readable: format(dateOffset, "EEE MMM do h:mm aaa"),
    date: dateOffset.toJSON()
  };
};

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export default function Home({todos}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Exploring Vercel PR Environments Together</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js app deployed with Vercel!</a>
        </h1>
        <TodoWrapper>
        {
          todos.slice(0, 10).map(todo => <Todo {...todo} />)
        }
        </TodoWrapper>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const todosFromRes = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = todosFromRes.map(todo => {
    return {...todo, due: setRandomOffset()};
  })

  return {
    props: {
      todos
    }, // will be passed to the page component as props
  }
}
