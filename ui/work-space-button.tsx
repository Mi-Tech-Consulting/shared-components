import { Icon } from '@iconify/react';
import {
    Button,
    Select,
    SelectItem,
    SelectSection,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    DropdownSection,
    useDisclosure,
    Link
} from '@nextui-org/react';
import AddBuinessPopup from './addBuisness/AddBuisnessPopup';

const workspaces = [
    {
        value: '0',
        label: 'Acme Inc.',
        items: [
            {
                value: '1',
                label: 'Core workspace'
            },
            {
                value: '2',
                label: 'Design workspace'
            },
            {
                value: '3',
                label: 'Dev. workspace'
            },
            {
                value: '4',
                label: 'Marketing workspace'
            }
        ]
    }
];

export function WorkSpaceButton(props: { isCompact: boolean }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure({
        defaultOpen: false
    });

    return props.isCompact ? (
        <div className="min-h-14">
            <AddBuinessPopup firstOpen={isOpen} onFirstChange={onOpenChange} />
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <div className="relative h-10 w-10 flex-none rounded-full border-small border-default-300 items-center justify-center hover:bg-default-100 cursor-pointer">
                        <Icon
                            className="text-default-500 h-9 mx-auto"
                            icon="solar:users-group-rounded-linear"
                            width={24}
                        />
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Workspace Actions" variant="faded">
                    {[
                        ...workspaces.map((workspace) => (
                            <DropdownSection
                                title={workspace.label}
                                showDivider
                                key={workspace.value}
                            >
                                {workspace.items.map((item) => (
                                    <DropdownItem key={item.value} aria-label={item.label}>
                                        {item.label}
                                    </DropdownItem>
                                ))}
                            </DropdownSection>
                        )),
                        <DropdownItem
                            key={'Craete'}
                            aria-label="Create workspace"
                            onPress={onOpen}
                        >
                            <Button
                                className="bg-default-100 text-center text-foreground w-full"
                                size="sm"
                            >
                                New Workspace
                            </Button>
                        </DropdownItem>
                    ]}
                </DropdownMenu>
            </Dropdown>
        </div>
    ) : (
        <>
            <AddBuinessPopup firstOpen={isOpen} onFirstChange={onOpenChange} />
            <Select
                disableSelectorIconRotation
                aria-label="Select workspace"
                className={'px-1'}
                classNames={{
                    trigger:
                        'min-h-14 bg-transparent border-small border-default-200 dark:border-default-100 data-[hover=true]:border-default-500 dark:data-[hover=true]:border-default-200 data-[hover=true]:bg-transparent'
                }}
                defaultSelectedKeys={['1']}
                items={workspaces}
                listboxProps={{
                    bottomContent: (
                        <Button
                            className="bg-default-100 text-center text-foreground w-full"
                            size="sm"
                            onPress={onOpen}
                        >
                            New Workspace
                        </Button>
                    )
                }}
                placeholder="Select workspace"
                renderValue={(items) => {
                    return items.map((item) => (
                        <div key={item.key} className="ml-1 flex flex-col gap-y-0.5">
                            <span className="text-tiny leading-4">Mitech Inc.</span>
                            <span className="text-tiny text-default-400">
                                {item.data?.label}
                            </span>
                        </div>
                    ));
                }}
                selectorIcon={
                    <Icon
                        color="hsl(var(--nextui-default-500))"
                        icon="lucide:chevrons-up-down"
                    />
                }
                startContent={
                    <div className="relative h-10 w-10 flex-none rounded-full border-small border-default-300">
                        <Icon
                            className="ml-2 mt-2 text-default-500"
                            icon="solar:users-group-rounded-linear"
                            width={24}
                        />
                    </div>
                }
            >
                {(section) => (
                    <SelectSection
                        key={section.value}
                        hideSelectedIcon
                        showDivider
                        aria-label={section.label}
                        items={section.items}
                        title={section.label}
                    >
                        {/* @ts-ignore */}
                        {(item) => (
                            <SelectItem
                                key={item.value}
                                aria-label={item.label}
                                textValue={item.label}
                            >
                                <div className="flex flex-row items-center justify-between gap-1">
                                    <span>{item.label}</span>
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-small border-default-300">
                                        <Icon
                                            className="text-default-500"
                                            icon="solar:users-group-rounded-linear"
                                            width={16}
                                        />
                                    </div>
                                </div>
                            </SelectItem>
                        )}
                    </SelectSection>
                )}
            </Select>
        </>
    );
}
