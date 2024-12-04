import {  createTheme, Theme, ThemeProvider } from "@mui/material";
import { SxProps } from "@mui/system";
import { TimePicker, TimeValidationError } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import styled from "styled-components"

export namespace NMuiProps {
  export type props =  {
    minTime?:Dayjs;
    maxTime?:Dayjs;
    defaultValue?:Dayjs | null;
    onChange:(val:Dayjs | null) => void;
    onClose?:()=>void;
    onError?:(error:TimeValidationError | null)=>void;
    customStyleProps?:SxProps<Theme>;
    interval?:number;
    value?:Dayjs | null;
    /**@default false */
    isDisabled?:boolean;
    errorMsg?:string;
  }
  
}

/**@info couldn't change via `sx` prop so had to create theme to override it. */
const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            display: "none", 
          },
        },
      },
    },
  }
});

/**@Example 
 * <MaterialUi 
 *   onChange={(val)=>{setState((prev)=>({...prev,time:val}))}}
 *   onError={(err)=>setState((prev)=>({...prev,error:err}))}
 *   minTime={dayjs()} 
 *   maxTime={dayjs()}
 * />
 */
const MaterialUi = (props:NMuiProps.props) => {
  const {
    minTime,
    maxTime,
    isDisabled=false,
    defaultValue = null,
    onChange,onClose,onError,
    customStyleProps,
    interval=15,
    value=null,
    errorMsg
    } = props;

  const startTime=dayjs().hour(0).minute(0);
  const endTime = dayjs().hour(24).minute(59)


  return (
    <Container>
      <ThemeProvider theme={theme}>
        <TimePicker label="Basic time picker" 
          defaultValue={defaultValue}
          disableIgnoringDatePartForTimeValidation
          ampm={false} 
          minTime={minTime || startTime} 
          maxTime={maxTime || endTime} 
          onChange={(e)=> onChange(e)}
          value={value}
          onClose={onClose}
          onError={(error)=> onError?.(error)}
          disabled={isDisabled}
          sx={{
            ...customStyleProps
        }}
          minutesStep={interval}
         />
         {errorMsg ? <div className="errMsg">{errorMsg}</div> : null}
      </ThemeProvider>

    </Container>
  )
}


export default MaterialUi

const Container = styled.div`
  /*  */
`