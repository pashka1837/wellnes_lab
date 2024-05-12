import {Form, useNavigate} from 'react-router-dom';
import styles from './Form.module.css';
import {type SubmitFn} from '../../types';

type Props = {
	children: string | JSX.Element | JSX.Element[];
	handleSubmit: SubmitFn;
	formName: string;
	submitBtnName: string;
	extraBtnName: string;
	ifLogedin: string;
	navigateTo: string;
	isDisable: boolean;
};

export default function MyForm({children, handleSubmit, isDisable, navigateTo, formName, submitBtnName, extraBtnName, ifLogedin}: Props) {
	const navigate = useNavigate();

	return (
		<Form className={styles.myForm} onSubmit={handleSubmit}>
			<h3>{formName}</h3>
			{children}
			<div className={styles.btn_container}>
				<button disabled={isDisable} className={`${styles.submit_btn} btn`} type='submit'>{submitBtnName}</button>
				<p>{ifLogedin}</p>
				<button

					className={`${styles.extra_btn} btn`}
					type='button'
					onClick={() => {
						navigate(navigateTo);
					}}
				>
					{extraBtnName}
				</button>
			</div>
		</Form>
	);
}
