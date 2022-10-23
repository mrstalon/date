import { useState, useCallback } from 'react';
import { Flex, Text, Button, RadioGroup, Stack, Radio, Image } from '@chakra-ui/react';

const ThirdStep = ({ onSuccess, onFailure }) => {
    const [value, setValue] = useState('1');

    const handleAnswer = useCallback(() => {
        const numericValue = +value;

        if (numericValue === 2) {
            onSuccess();
        } else {
            onFailure();
        }
    }, [onSuccess, onFailure, value]);

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
                    Третий шаг
                </Text>

                <Text
                    color='white'
                    fontSize='22px'
                    lineHeight='26px'
                    align='center'
                    marginBottom='40px'
                >
                    Выбери самую красивую и великолепную девушку
                    <br />
                    По версии твоего кита, разумеется)
                </Text>

                <Flex
                    direction='row'
                    align='center'
                >
                    <Flex
                        direction='column'
                        align='center'
                        marginRight='20px'
                    >
                        <Image
                            width='250px'
                            height='auto'
                            marginBottom='20px'
                            src='eda.jpeg'
                        />

                        <Text
                            color='white'
                            fontSize='18px'
                            lineHeight='22px'
                        >
                            1
                        </Text>
                    </Flex>

                    <Flex
                        direction='column'
                        align='center'
                        marginRight='20px'
                    >
                        <Image
                            width='250px'
                            height='auto'
                            marginBottom='20px'
                            src='alina.JPG'
                        />

                        <Text
                            color='white'
                            fontSize='18px'
                            lineHeight='22px'
                        >
                            2
                        </Text>
                    </Flex>

                    <Flex
                        direction='column'
                        align='center'
                    >
                        <Image
                            width='250px'
                            height='auto'
                            marginBottom='20px'
                            src='margo.webp'
                        />

                        <Text
                            color='white'
                            fontSize='18px'
                            lineHeight='22px'
                        >
                            3
                        </Text>
                    </Flex>
                </Flex>

                <RadioGroup
                    onChange={setValue}
                    value={value}
                    width='fit-content'
                    marginX='auto'
                    marginTop='30px'
                >
                    <Stack direction='row'>
                        <Radio value='1'>
                            <Text
                                color='white'
                                fontSize='16px'
                                lineHeight='20px'
                            >
                                1
                            </Text>
                        </Radio>
                        <Radio value='2'>
                            <Text
                                color='white'
                                fontSize='16px'
                                lineHeight='20px'
                            >
                                2
                            </Text>
                        </Radio>

                        <Radio value='3'>
                            <Text
                                color='white'
                                fontSize='16px'
                                lineHeight='20px'
                            >
                                3
                            </Text>
                        </Radio>
                    </Stack>
                </RadioGroup>

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

export default ThirdStep;
