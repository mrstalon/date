import { useState, useCallback } from 'react';
import { Flex, Text, Button, RadioGroup, Stack, Radio, Image } from '@chakra-ui/react';

const FifthStep = ({ onSuccess, onFailure }) => {
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
                    Теперь я точно уверен что это ты
                </Text>

                <Text
                    color='white'
                    fontSize='22px'
                    lineHeight='26px'
                    align='center'
                    marginBottom='15px'
                >
                    После того как я прочитал твое письмо, я многое хотел бы тебе сказать
                    <br />
                    Но пока что скажу спасибо за то, какие эмоции ты во мне пробуждаешь, к примеру у меня вот куча работы
                    <br />
                    Но я как влюбившийся школьник сидел и весь вечер делал этот сайт, надеюсь ты хотя бы улыбнулась)
                </Text>

                <Text
                    color='white'
                    fontSize='22px'
                    lineHeight='26px'
                    align='center'
                    marginBottom='40px'
                >
                    Жалко правда я это не увидел :(
                    <br />
                    Теперь к делу
                </Text>

                <Text
                    color='white'
                    fontSize='22px'
                    lineHeight='26px'
                    align='center'
                    marginBottom='15px'
                >
                    24 Октября, понедельник, 22:00
                    <br />
                    Ресторан Rose Gose, ул. Козлова 3
                    <br />
                    <br />
                    P.S Нахождение на этом сайте обойдется тебе в поцелуй при встрече
                    <br />
                    <br />
                    P.S.S Надеюсь ты помнишь что я считаю настоящим поцелуем
                </Text>
            </Flex>
        </Flex>
    );
};

export default FifthStep;
