import styled from "styled-components";
import MaterialUi from "./components/material-ui";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const App = () => {

  const [state,setState] = useState<{time:Dayjs | null,error: string | null}>({time:null,error:null});

  return (
        <AppContainer>

          {state.error ? <p>{state.error}</p> : null}

          {state?.time?.isValid() ? <p>{state.time.format(`YYYY-MM-DD HH:MM`)}</p> : null}
          
          <MaterialUi 
            onChange={(val)=>{setState((prev)=>({...prev,time:val}))}}
            onError={(err)=>setState((prev)=>({...prev,error:err}))}
            minTime={dayjs()} 
            maxTime={dayjs()}
          />
        </AppContainer>
 
  )
}

export default App;

const AppContainer = styled.div`
  padding:20px 10px;
  width:100%;
  height:100%;

  display:flex;
  flex-direction: column;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
`