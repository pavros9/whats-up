import { Spin, Flex } from 'antd';

type LoaderPageProps = {
    className?: string;
};

export const LoaderPage = ({ className }: LoaderPageProps) => {
    return (
        <Flex
            align="center"
            gap="middle"
            justify="center"
            className={className}
            style={{ height: '100vh' }}
        >
            <Spin size="large" />
        </Flex>
    );
};
