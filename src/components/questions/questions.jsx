import React, { useState } from "react";
import "./questions.scss";

const faqData = [
  {
    question: "1. Срочный выкуп авто - безопасно ли?",
    answer:
      "Срочный выкуп автомобиля практически не отличается от обычной сделки купли-продажи. Единственная разница, что Ваш автомобиль покупает компания, которая оказывает услуги в данной сфере.",
  },
  {
    question: "2. Какие документы нужны при продаже?",
    answer: "Свидетельство о регистрации ТС, генеральная доверенность.",
  },
  {
    question: "3. Кто юридически отвечает за оформление сделки купли-продажи?",
    answer:
      "Юридическое оформление сделки берет на себя наша компания. Все условия договора купли-продажи являются типовыми и не имеют никаких подводных камней.",
  },
  {
    question: "4. Что делать с битым авто?",
    answer:
      "Если Вы попали в ДТП и автомобиль требует ремонта, то у Вас есть три возможных варианта:\n1. Отремонтировать автомобиль за свой счёт и продолжить эксплуатацию.\n2. Если авто не подлежит ремонту или у Вас нет такой возможности, то можно отдать его на утилизацию. Однако для этого потребуется время на снятие с учета, а выгода от этого будет очень маленькая.\n3. Продать авто нам. Мы скупаем автомобили в любом состоянии и готовы предложить цену выше, чем популярные авто-аукционы. Это наиболее выгодный вариант: продажа занимает менее одного дня, и Вы сразу получаете деньги за авто.",
  },
];

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="qq">
      <div className="questions">
        <div className="questions__container">
          <h1 className="questions__title">ЧАСТЫЕ ВОПРОСЫ</h1>
          <div className="qc">
            <div className="questions_content">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`questions__item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex">
                    <h4
                      className={`questions__question ${
                        activeIndex === index ? "collapsed" : ""
                      }`}
                    >
                      {item.question}
                    </h4>
                    {activeIndex === index && (
                      <p className="questions__answer">
                        {item.answer.split("\n").map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    )}
                  </div>
                  <p className="addPlus">{activeIndex === index ? "-" : "+"}</p>
                </div>
              ))}
            </div>
            <div className="questions__cta">
              <h2 className="questions__cta-title">У вас остались вопросы?</h2>
              <p className="questions__cta-text">
                Нужна объективная оценка машины? Пришлите фото вашего авто в
                WhatsApp и узнайте стоимость выкупа уже через 5 минут!
              </p>
              <button className="questions__cta-button">
                НАПИСАТЬ НА WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
