import { useState } from 'react';

import type { PickerValue } from '@mui/x-date-pickers/internals/models';
import { DatePicker } from '@mui/x-date-pickers';

import { type PersonalInterest } from '../../core/entities/personal-interest';
import Interests from './components/Interests';

import { Input, InputGroup } from '../../components/Input';
import TermAndPolicies from '../../components/TermAndPolicts';

import SignUpRightBgImage from './components/SignUpRightBgImage';
import SignUpCardButtons from './components/SignUpCardButtons';
import SignUpCardHeader from './components/SignUpCardHeader';
import SignUpBgImage from './components/SignUpLeftBgImage';
import SignUpCardForm from './components/SignUpCardForm';

import SelectDropdown from '../../components/SelectDropdown';
import { showErrorMessage } from '../utils';

interface FormData {
    birthDate?: Date;
    schoolNivel: string;
    specificNeeds: string;
}

function SignUp() {
    const [interests, setInterests] = useState<PersonalInterest[]>([]);
    const [formData, setFormData] = useState<FormData>({
        schoolNivel: '',
        specificNeeds: '',
        birthDate: undefined,
    });

    const handleDateChange = (date: PickerValue) => {
        setFormData(prev => ({ ...prev, birthDate: date?.toDate() }));
    };

    const handleInterestChange = (interest: PersonalInterest) => {
        if (interests.includes(interest)) {
            setInterests(interests.filter(i => i.id !== interest.id));
        } else {
            setInterests([...interests, interest]);
        }
    }

    const handleInputChange = (value: string, key: keyof FormData) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const hasData = formData.birthDate ||
            formData.schoolNivel.trim() !== '' ||
            formData.specificNeeds.trim() !== '' ||
            interests.length > 0;

        if (!hasData) {
            return showErrorMessage({
                message: 'Por favor, preencha pelo menos um campo antes de continuar',
                fontWeight: 'normal',
            })

        }

        console.log('Form submitted:', formData, interests);
    };


    return (
        <div className="h-screen w-full flex items-center justify-between overflow-hidden bg-white p-6">
            <SignUpBgImage />

            <SignUpCardForm
                handleSubmit={handleSubmit}
            >
                <SignUpCardHeader />

                <InputGroup>
                    <Interests
                        onChange={handleInterestChange}
                        onSelected={(it) => interests.includes(it)}
                    />

                    <Input
                        type='date'
                        label='Data de Nascimento (opcional)'
                        customField={
                            <DatePicker
                                format="DD/MM/YYYY"
                                views={['year', 'month', 'day']}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                onChange={(date) => handleDateChange(date)}
                            />
                        }
                    />

                    <SelectDropdown
                        label="Escolaridade"
                        placeholder='Selecione sua escolaridade'
                        options={[
                            "Fundamental",
                            "Médio",
                            "Superior",
                            "Pós-Graduação"
                        ]}
                        value={formData.schoolNivel}
                        onChangeOption={(it) => handleInputChange(it, 'schoolNivel')}
                    />

                    <Input
                        type='text'
                        value={formData.specificNeeds}
                        label='Necessidade Específica (se houver)'
                        customField={
                            <textarea
                                onChange={
                                    (it) => handleInputChange(it.currentTarget.value, 'specificNeeds')

                                }
                                className="w-full min-h-[44px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            />
                        }
                    />

                </InputGroup>

                <SignUpCardButtons
                    onIgnore={() => console.log('Ignored')}
                    onClick={handleSubmit}
                />

                <TermAndPolicies />
            </SignUpCardForm>

            <SignUpRightBgImage />
        </div>
    );
};

export default SignUp;