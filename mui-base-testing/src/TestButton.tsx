import * as React from 'react';
import { Button } from '@mui/base/Button';
import { useNavigate } from "react-router-dom";

export default function TestButton(props: {page :string}) {
    const navigate = useNavigate();
  return <Button 
  className='text-3xl font-bold underline'
  onClick={() => navigate(props.page)}
  >
    Click Me
  </Button>;
}
