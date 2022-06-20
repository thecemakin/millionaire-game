import { useEffect, useState,useMemo } from "react";
import "./app.css";
import Questions from "./components/Questions";
import Timer from "./components/Timer";


function App() {
  
  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const moneyPyramid = useMemo(() =>
    [
      {id:1, reward:"$ 200"},
      {id:2, reward:"$ 500"},
      {id:3, reward:"$ 2.000"},
      {id:4, reward:"$ 7.000"},
      {id:5, reward:"$ 35.000"},
      {id:6, reward:"$ 80.000"},
      {id:7, reward:"$ 250.000"},
      {id:8, reward:"$ 450.000"},
      {id:9, reward:"$ 700.000"},
      {id:10, reward:"$ 10.000.000"}
      
      ].reverse()
  ,[]);
    const data = [
      {
        id:1,
        question:'Halk arasında "zamanla şartlar çok değişti, eski durum kalmadı" anlamında kullanılan sözde "altından çok sular aktı" denilen hangisidir?',
        answers:[{
          answer: 'Semaver',
          correct: false,
        },
        { answer:'Kahve Makinası',
          correct: false,
        },
        { answer:'Çaydanlık',
          correct: false,
        },
        { answer:'Köprü',
          correct: true        
        }
        ]},{
        id:2,
        question:'Hangisi beyindeki bir bölgeye verilen addır?',
        answers:[{
          answer: 'Omurilik Sarımsağı',
          correct: false,
        },
        { answer:'Omurilik Turpu',
          correct: false,
        },
        { answer:'Omurilik Soğanı',
          correct: true,
        },
        { answer:'Omurilik Brokolisi',
          correct: false       
        }
        ]},{
        id:3,
        question:'Genellikle hangisi bilenir??',
        answers:[{
          answer: 'Çatal',
          correct: false,
        },
        { answer:'Bıçak',
          correct: true,
        },
        { answer:'Tabak',
          correct: false,
        },
        { answer:'Kaşık',
          correct: false       
        }
        ]},{
        id:4,
        question:'Üçün üç katından, ikinin iki katı çıkarılırsa sonuç ne olur?',
        answers:[{
          answer: '1',
          correct: false,
        },
        { answer:'2',
          correct: false,
        },
        { answer:'5',
          correct: true,
        },
        { answer:'23',
          correct: false       
        }
        ]},{
        id:5,
        question:'1924 Anayasasında ve 1961 Anayasasında Türkiyenin başkenti hangisi olarak belirtilmiştir?',
        answers:[{
          answer: 'Ankara',
          correct: true,
        },
        { answer:'İstanbul',
          correct: false,
        },
        { answer:'Şırnak',
          correct: true,
        },
        { answer:'Van',
          correct: false       
        }
        ]},{
        id:6,
        question:'Filika, genellikle hangi araçta bulunur ?',
        answers:[{
          answer: 'Gemi',
          correct: true,
        },
        { answer:'Tren',
          correct: false,
        },
        { answer:'Uçak',
          correct: false,
        },
        { answer:'Metrobüs',
          correct: false       
        }
        ]},{
        id:7,
        question:'Çevresi şeritle kaplı,içi boş bir ters üçgen trafikte ne anlama gelir?',
        answers:[{
          answer: 'Hızlan',
          correct: false,
        },
        { answer:'Park edilmez',
          correct: false,
        },
        { answer:'Dur',
          correct: false,
        },
        { answer:'Yol ver',
          correct: true       
        }
        ]},{
        id:8,
        question:'Çok üzülen birinin, halk arasında burnunun neresinin sızladığı söylenir?',
        answers:[{
          answer: 'Direk',
          correct: false,
        },
        { answer:'Kemer',
          correct: false,
        },
        { answer:'KÜrek',
          correct: true,
        },
        { answer:'Delik',
          correct: false       
        }
        ]},{
        id:9,
        question:'"Bulutların üzerinde gezmek" sözü hangisini ifade etmek için kullanılır?',
        answers:[{
          answer: 'Cesaret',
          correct: false,
        },
        { answer:'Gurur',
          correct: false,
        },
        { answer:'Mutluluk',
          correct: true,
        },
        { answer:'Şaşkınlık',
          correct: false       
        }
        ]},{
        id:10,
        question:'Eğer karşınızdaki ekranda "sezon finali" yazıyorsa hangisini izliyorsunuz demektir?',
        answers:[{
          answer: 'Sinema filmi',
          correct: false,
        },
        { answer:'TV dizisi',
          correct: true,
        },
        { answer:'Futbol maçı',
          correct: false,
        },
        { answer:'Haber bülteni',
          correct: false       
        }
        ],

      }
    ];
  useEffect(() =>{
    questionNum > 1 && setEarned(moneyPyramid.find( m => m.id === questionNum -1).reward)
  },[moneyPyramid,questionNum])
  return (
    <div className="App">
      <div className="main">
        {stop ? 
        (<h1 className="end-text">You earned: {earned}</h1>) : (
          <>
          <div className="top">
          <div className="timer">
            <Timer
          setStop = {setStop}
          questionNum = {questionNum}
            />  
          </div>
        </div>
        <div className="bottom">
          <div>
          <Questions
          data = {data}
          setStop = {setStop}
          questionNum = {questionNum}
          setQuestionNum = {setQuestionNum}
          />
          </div>
        </div>
          </> 
        )}
        
      </div>
      <div className="money-pyramid">
        <ul className="money-list">
          {moneyPyramid.map((m) =>
          <li className={questionNum === m.id ? "money-list-item active": "money-list-item"}>
          <span className="money">{m.reward}</span>
          </li>
          )}
        </ul>
      </div>
    </div>
  );
}


export default App;
