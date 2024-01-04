import Header from '/src/Header/Header.jsx'
import Home from '/src/Home/Home.jsx'
import About from '/src/About/About.jsx'
import Friends from '/src/Friends/Friends.jsx'
import Hobbys from '/src/Hobbys/Hobbys'

const ddIcon = <svg className="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
  </svg>

const textAboutAndrew = 'Андрий, младший сын героического козацкого полковника Тараса Бульбы, в 12 лет был отправлен на обучение в Киев, в «академию», где уже учился его старший брат Остап (тоже с 12 лет). На самом деле учебное заведение с таким названием существовало в Киеве в XVIII – XIX веках. Но поскольку из всех подлинных исторических событий, на фоне которых происходит действие повести, хронологически последнее относится к 1638 году (восстание Остряницы), то и учебное заведение, в котором получили образование младшие Бульбы, можно считать лишь прообразом будущей академии, к тому же учреждённым буквально за несколько лет до начала описываемых событий (как бы специально для Остапа и Андрия!), а именно в сентябре 1632 года, когда объединились Киевская братская и Лаврская школы и в результате была создана Киево-Братская коллегия.'

function App() {

  return (
    <>
      <Header></Header>
      <Home/>
      <About section="ABOUT ME" sectionName='about' text={textAboutAndrew}/>
      <Friends section="FRIENDS" sectionName='friends'/>
      <Hobbys/>
    </>
  )
}

export default App
