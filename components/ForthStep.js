import { useState, useCallback } from 'react';
import { Flex, Text, Button, Input } from '@chakra-ui/react';

const ForthStep = ({ onSuccess, onFailure }) => {
    const [value, setValue] = useState(0);

    const handleChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const handleAnswer = useCallback(() => {
        console.log(value);

        if (+value === 9) {
            onSuccess();
        } else {
            onFailure();
        }
    }, [value, onFailure, onSuccess]);

    return (
        <Flex
            direction='column'
            align='center'
            justify='center'
            maxWidth='1080px'
        >
            <Flex direction='column' align='center'>
                <Text
                    color='white'
                    fontSize='32px'
                    lineHeight='40px'
                    align='center'
                    marginBottom='15px'
                >
                    Четвертый шаг
                </Text>

                <Text
                    color='white'
                    fontSize='22px'
                    lineHeight='26px'
                    align='center'
                    marginBottom='40px'
                >
                    Какого сентября я в первый ( на самом деле второй, ахаха ) пригласил тебя на свидание?
                </Text>

                <Input
                    color='white'
                    width='200px'
                    type='number'
                    onChange={handleChange}
                    value={value}
                />

                <Button
                    marginTop='40px'
                    width='fit-content'
                    colorScheme='facebook'
                    onClick={handleAnswer}
                >
                    Ответить
                </Button>
            </Flex>
        </Flex>
    );
};

export default ForthStep;
