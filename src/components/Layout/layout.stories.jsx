import Layout from "./layout";


export default {

    title: "Layout Component",
    component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Home = Template.bind({});

Home.args = {
    label: 'Layout-Home',
    variant: "Home"
};
