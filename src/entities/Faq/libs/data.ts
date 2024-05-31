export interface IAccordionItem {
    id: number;
    question: string;
    answer: string;
}

export const accordionFaq: IAccordionItem[] = [
    {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?'
    },
    {
        id: 2,
        question: 'Lorem ipsum dolor sit',       
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna?'
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore?'
    },
    {
        id: 4,
        question: 'Lorem ipsum',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et?'
    }
]
