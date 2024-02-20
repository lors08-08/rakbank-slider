import {ThemeProvider} from "../ThemeWrapper";
import {SliderQuestions} from "../../widgets/slider-questions";
import {useEffect, useState} from "react";
import {UsersReactions} from "../../widgets/user-reactions";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addAnswer} from "../../entities/model/slice";
import {debounce} from "lodash";
import {fetchQuestions, submitAnswers} from "../../entities/model/asyncActions";

export const App = () => {
  const [currentStepId, setCurrentStepId] = useState(0)

  const questions = useSelector(state => state.slider.questions)
  const answered = useSelector(state => state.slider.answered)

  const dispatch = useDispatch()

  const isCompleted = currentStepId >= Object.keys(questions).length - 1

  useEffect(() => {
    dispatch(fetchQuestions())
  },[dispatch])

  const handleToNext = () => {
    setCurrentStepId(prev => prev + 1)
  }

  const handleAnswer = ({icon, label}) => {

    const userAnswer = {
      currentStep: currentStepId,
      title: questions[currentStepId].title,
      option: {
        icon,
        label
      }
    }

    dispatch(addAnswer(userAnswer))

    if(isCompleted) {
      dispatch(submitAnswers({...answered, [currentStepId]: {
          title: questions[currentStepId].title,
          option: {
            icon,
            label
          }
        }}))
    }

    const debounced = debounce(handleToNext, 1000)

    debounced()
  }

  return (
    <ThemeProvider>
     <SWrapper>
       <SliderQuestions currentStepId={currentStepId} onSelectStep={setCurrentStepId} />
       {currentStepId <= 2 && <UsersReactions currentStepId={currentStepId} onSelect={handleAnswer} onToNext={handleToNext} />}
     </SWrapper>
    </ThemeProvider>
  );
}

const SWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

