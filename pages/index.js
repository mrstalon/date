import { useState, useCallback } from 'react';
import { Flex, Text, Button, ChakraProvider } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FirstStep, SecondStep, ThirdStep, ForthStep, FifthStep } from '../components';

export default function Home() {
  const [step, setStep] = useState(0);

  const stepForward = useCallback(() => {
    setStep((state) => ++state);
  }, []);

  const goInitialStep = useCallback(() => {
      setStep(0);
      toast('Это точно ты?)');
  }, []);

  const goSecondStep = useCallback(() => {
      setStep(2);
      toast('Умница, кит мной)');
  }, []);

    const goThirdStep = useCallback(() => {
        setStep(3);
        toast('Краш 😍, не правда ли?');
    }, []);

    const goForthStep = useCallback(() => {
        setStep(4);
        toast('Ты великолепна 😍');
    }, []);

    const goInitialStepFromThird = useCallback(() => {
        setStep(0);
        toast('Ты слепая что-ли? 😆');
    }, []);

    const goInitialStepFromForth = useCallback(() => {
        setStep(0);
        toast('Покапайся в тг получше 😆');
    }, []);

    const goFifthStep = useCallback(() => {
        setStep(5);
        toast('Well Done!');
    }, []);

  return (
    <ChakraProvider>
        <ToastContainer />
        <Flex
            width='100vw'
            height='100vh'
            align='center'
            justify='center'
            backgroundColor={'rgba(9,26,42,0.91)'}
        >
            {step === 0 ? (
                <Flex
                    minWidth='320px'
                    direction='column'
                    align='center'
                >
                    <Text
                        color='white'
                        fontSize='32px'
                        lineHeight='40px'
                        align='center'
                        marginBottom='15px'
                    >
                        Если ты это видишь, значит ты особенная
                    </Text>

                    <Text
                        color='white'
                        fontSize='22px'
                        lineHeight='26px'
                        align='center'
                    >
                        Мне только нужно убедиться что это правда ты :)
                    </Text>

                    <Button
                        marginTop='20px'
                        width='fit-content'
                        colorScheme='facebook'
                        onClick={stepForward}
                    >
                        Это правда Я!
                    </Button>
                </Flex>
            ) : null}

            {step === 1 ? (
                <FirstStep onFailure={goInitialStep} onSuccess={goSecondStep} />
            ) : null}

            {step === 2 ? (
                <SecondStep onFailure={goInitialStep} onSuccess={goThirdStep} />
            ) : null}

            {step === 3 ? (
                <ThirdStep onFailure={goInitialStepFromThird} onSuccess={goForthStep} />
            ) : null}

            {step === 4 ? (
                <ForthStep onFailure={goInitialStepFromForth} onSuccess={goFifthStep} />
            ) : null}

            {step === 5 ? (
                <FifthStep />
            ) : null}
        </Flex>
    </ChakraProvider>
  );
}
