import {Card, CardBody} from '@heroui/card';

interface QualificationCardProps {
    title: string;
    organization: string;
    note?: string;
}

export function QualificationCard({title, organization, note}: QualificationCardProps) {
    return (
        <Card>
            <CardBody>
                <h2 className='text-sm'>{organization}</h2>
                <h3 className='my-3 font-semibold'>{title}</h3>
                {note && (
                    <div className='flex justify-end'>
                        <p className='text-xs'>{note}</p>
                    </div>
                )}
            </CardBody>
        </Card>
    );
}
