import {ChangeEvent, useState} from "react";
import {PageConfigModel} from "@/models";
import {CustomCheck, ThemeButton} from "@/components";

export default function Home() {
    const [pages, setPages] = useState<PageConfigModel[]>([
        {name: 'Page 1', checked: false},
        {name: 'Page 2', checked: false},
        {name: 'Page 3', checked: false},
        {name: 'Page 4', checked: false},
    ]);

    const [isAllPagesChecked, setIsAllPagesChecked] = useState<boolean>(false);
    const [allChecked, setChecked] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);

    const selectAll = (e: ChangeEvent | any) => {
        setPages(prevState => prevState.map(page => ({
            ...page,
            checked: e.target.checked
        })));
        setIsAllPagesChecked(e.target.checked);
        setChecked(e.target.checked);
    }

    const updateCheck = (e: ChangeEvent | any, index: number) => {
        let prevPages = [...pages];
        prevPages[index].checked = e.target.checked;
        setPages(prevPages);
        setIsAllPagesChecked(prevPages.length === prevPages.filter(t => t.checked).length);
        setChecked(prevPages.filter(t => t.checked).length > 0);
    }

    const submitAllPages = () => {
        selectAll({target: {checked: false}});
        // setIsDone(true)
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-1/4 p-4 bg-white rounded shadow-lg">
                <ul className="mb-4">
                    <li className="flex justify-between items-center">
                        <CustomCheck changeEvent={(event: ChangeEvent) => selectAll(event)} labelText="All pages"
                                     disabled={isDone} checked={allChecked}
                                     customClass={!isAllPagesChecked ? 'not-all-checked' : ''}/>
                    </li>
                    <hr className="my-4"/>
                    {pages.map((page: PageConfigModel, index: number) => (
                        <li className="flex justify-between items-center pb-4" key={index}>
                            <CustomCheck changeEvent={(event: ChangeEvent) => updateCheck(event, index)}
                                         labelText={page.name as string}
                                         disabled={isDone} checked={page.checked}/>
                        </li>
                    ))}
                </ul>
                <hr className="my-4"/>
                <ThemeButton buttonClick={submitAllPages} buttonText={'Done'}/>
            </div>
        </div>
    );
}
