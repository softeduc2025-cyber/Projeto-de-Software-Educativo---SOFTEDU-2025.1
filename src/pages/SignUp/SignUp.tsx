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
import { showErrorMessage, showSuccessMessage } from '../utils';
import { ignoreUserInfo, registerUserInfo } from '../../core/auth-service';
import { useAuth } from '../../hooks/userAuth';
import { isError } from '../../core/entities/result';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/routes';
import type { UserInfo } from '../../core/entities/user';

interface FormData {
    birthDate?: Date;
    schoolNivel: string;
    specificNeeds: string;
}

function SignUp() {
    const navigate = useNavigate();
    const { user, saveSession } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
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

    const handleSubmit = async (e: React.FormEvent) => {
        if (isLoading) return

        e.preventDefault();

        const hasData = formData.birthDate ||
            formData.schoolNivel.trim() !== '' ||
            formData.specificNeeds.trim() !== '' ||
            interests.length > 0;

        if (!hasData) {
            return showErrorMessage({
                fontWeight: 'normal',
                message: 'Por favor, preencha pelo menos um campo antes de continuar',
            })
        }

        setIsLoading(true)

        const info: UserInfo = {
            createdAt: new Date(),
            birthDate: formData.birthDate,
            educationLevel: formData.schoolNivel,
            interests: interests.map(i => i.name),
            specificNeeds: formData.specificNeeds,
        }

        const result = await registerUserInfo(user, info);

        if (isError(result)) {
            return showErrorMessage({
                fontWeight: 'normal',
                message: result.error?.message || 'Erro ao registrar informações do usuário',
            });
        }

        showSuccessMessage({
            message: 'Informações do usuário registradas com sucesso!',
        });

        let newUser = user
        if (newUser) {
            newUser.details = info
            saveSession(newUser);
        }

        setIsLoading(false)
        navigate(AppRoutes.home)
    };

    const handleIgnore = async () => {
        setIsLoading(true)

        const result = await ignoreUserInfo(user);
        if (isError(result)) {
            return showErrorMessage({
                fontWeight: 'normal',
                message: result.error?.message || 'Erro ao ignorar informações do usuário',
            });
        }

        showSuccessMessage({
            message: 'Informações do usuário ignoradas, elas não serão coletadas.',
        });

        setIsLoading(false)
        navigate(AppRoutes.home)
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
                    isLoading={isLoading}
                    onIgnore={handleIgnore}
                    onClick={handleSubmit}
                />

                <TermAndPolicies />
            </SignUpCardForm>

            <SignUpRightBgImage />
        </div>
    );
};

export default SignUp;