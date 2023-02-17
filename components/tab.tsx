import Container from './container';
import cn from 'classnames';
import { EXAMPLE_PATH } from '../lib/constants';

type Props = {
	preview?: boolean;
};

const Tab = ({ preview }: Props) => {
	return (
		<div
			className={cn('border-b', {
				'bg-neutral-800 border-neutral-800 text-white': preview,
				'bg-neutral-50 border-neutral-200': !preview,
			})}
		>
			<Container>
				<div className="py-2 text-center text-sm">
					{preview ? (
						<>
							This page is a preview.{' '}
							<a
								href="/api/exit-preview"
								className="underline hover:text-teal-300 duration-200 transition-colors"
							>
								Click here
							</a>{' '}
							to exit preview mode.
						</>
					) : (
						<>
							<a
								href={``}
								className="underline hover:text-blue-600 duration-200 transition-colors"
							>
								Leave us some comments
							</a>
							.
						</>
					)}
				</div>
			</Container>
		</div>
	);
};

export default Tab;
