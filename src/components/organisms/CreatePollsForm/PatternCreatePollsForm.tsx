import React, { ChangeEventHandler, useState } from "react";
import QuestionInput from "../../atoms/Input/QuestionInput/QuestionInput";
import DopQuestion from "../../atoms/Input/DopQuestion/DopQuestion";
import SecondRadioButton from "../../atoms/RadioButtons/SecondRadioButton";
import VariantsInput from "../../atoms/Input/VariantsInput/VariantsInput";
import AddVariants from "../../atoms/IconButton/AddVariants/AddVariants";
import FirstCreateFormatButton from "../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";
import AddCriteriyInput from "../../atoms/Input/AddCriteriy/AddCriteriyInput";

const PatternCreatePollsForm = () => {
	const [name, setName] = useState("");
	const [specialQuestion, setSpecialQuestion] = useState("");
	const [specialAnswer, setSpecialAnswer] = useState(false);

	console.log(name, specialQuestion, specialAnswer);

	return (
		<div className="pl-96 p-32 grid grid-cols-1 gap-10">
			<div className="grid grid-cols-1 gap-3 pl-44">
				<div className="grid grid-cols-1 gap-2">
					<div className="font-sans text-xl items-center">
						Название опроса
					</div>
					<QuestionInput
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setName(event.currentTarget.value);
						}}
					/>
				</div>
				<div className="grid grid-cols-1 gap-3">
					<div className="grid gap-10">
						<AddCriteriyInput
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setSpecialQuestion(event.currentTarget.value);
							}}
						/>
						<div className="-mt-5">
							<SecondRadioButton
								onChange={(val: boolean) => {
									setSpecialAnswer(val);
								}}
							/>
						</div>
						<div className="grid grid-cols-1 gap-5">
							<VariantsInput
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => {}}
							/>
							<VariantsInput
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => {}}
							/>
							<VariantsInput
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => {}}
							/>
							<AddVariants />
						</div>
					</div>
				</div>
			</div>
			<a className="pl-96" href="/">
				<FirstCreateFormatButton children="Создать" />
			</a>
		</div>
	);
};

export default PatternCreatePollsForm;
