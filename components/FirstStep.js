import { useState, useCallback } from 'react';
import { Flex, Text, Button, RadioGroup, Stack, Radio } from '@chakra-ui/react';

const FirstStep = ({ onSuccess, onFailure }) => {
    const [value, setValue] = useState('1');

    const handleAnswer = useCallback(() => {
        const numericValue = +value;

        if (numericValue === 1) {
            onFailure();
        } else {
            onSuccess();
        }
    }, [onSuccess, onFailure, value]);

    return (
        <Flex
            direction='column'
            align='center'
            justify='center'
            maxWidth='1080px'
        >
            <Text>
                <Text
                    color='white'
                    fontSize='32px'
                    lineHeight='40px'
                    align='center'
                    marginBottom='15px'
                >
                    Первый шаг
                </Text>

                <Text
                    color='white'
                    fontSize='22px'
                    lineHeight='26px'
                    align='center'
                    marginBottom='40px'
                >
                    Когда ты слышишь слово <strong>кит</strong>, ты думаешь странно что кто-то называет тебя огромной рыбехой))
                    <br />
                    Или же тебе становиться тепло ведь это про тебя, котенок?
                </Text>

                <RadioGroup
                    onChange={setValue}
                    value={value}
                    width='fit-content'
                    marginX='auto'
                >
                    <Stack direction='column'>
                        <Radio value='1'>
                            <Text
                                color='white'
                                fontSize='16px'
                                lineHeight='20px'
                            >
                                Слышь, какой кит нахер, я сейчас парню позвоню и он тебе ебучку снесет
                            </Text>
                        </Radio>
                        <Radio value='2'>
                            <Text
                                color='white'
                                fontSize='16px'
                                lineHeight='20px'
                            >
                                Как же тепло, дай я тебя обниму
                            </Text>
                        </Radio>
                    </Stack>
                </RadioGroup>

                <Button
                    marginTop='20px'
                    width='fit-content'
                    colorScheme='facebook'
                    onClick={handleAnswer}
                >
                    Ответить
                </Button>
            </Text>
        </Flex>
    );
};

export default FirstStep;
