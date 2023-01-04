import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

//author: { avatar_url: "", nome: "", role: "" }
//publishedAt: Date
// content: String

//iteração

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nandorsm.png',
      name: 'Fernando Caetano',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type:'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego3g',
      role: 'Educator @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type:'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-04 20:00:00'),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {/* <Post
            author="Fernando Caetano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam quaerat commodi soluta dicta voluptatem"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" /> */}
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
