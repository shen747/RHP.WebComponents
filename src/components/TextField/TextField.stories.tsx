import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextField } from '.';
import { Icon } from '../Icon';

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    parameters: {
        docs: {
            description: {
                component: 'Enhanced TextField component with validation states, sentiment, focus management, and improved accessibility.'
            }
        }
    },
    argTypes: {
        sentiment: {
            control: { type: 'select' },
            options: ['critical', 'warning', 'success'],
            description: 'Visual sentiment state'
        }
    },
    args: { placeholder: 'Enter text' },
};
export default meta;

export const Basic: StoryObj<typeof TextField> = {};

export const WithTrailing: StoryObj<typeof TextField> = { 
    args: { trailingIcon: 'a-icon-search' } 
};

export const WithLeading: StoryObj<typeof TextField> = {
    args: {
        leading: <Icon name="a-icon-user" />,
        placeholder: 'Enter username'
    }
};

export const WithValidation: StoryObj<typeof TextField> = {
    args: {
        placeholder: 'Enter email',
        required: true,
        validationState: {
            alertLevel: 'error',
            messages: ['Please enter a valid email address']
        }
    }
};

export const WithSentiment: StoryObj<typeof TextField> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField 
                placeholder="Success state" 
                sentiment="success"
                value="Valid input"
            />
            <TextField 
                placeholder="Warning state" 
                sentiment="warning"
                value="Warning input"
            />
            <TextField 
                placeholder="Critical state" 
                sentiment="critical"
                value="Error input"
            />
        </div>
    )
};

export const WithMessages: StoryObj<typeof TextField> = {
    args: {
        placeholder: 'Enter password',
        messages: ['Password must be at least 8 characters', 'Include uppercase and lowercase letters']
    }
};

export const Disabled: StoryObj<typeof TextField> = {
    args: { 
        disabled: true, 
        value: 'Disabled field',
        placeholder: 'This field is disabled'
    }
};

export const Readonly: StoryObj<typeof TextField> = {
    args: { 
        readonly: true, 
        value: 'Read-only field',
        placeholder: 'This field is read-only'
    }
};

export const DisplayOnly: StoryObj<typeof TextField> = {
    args: { 
        displayOnly: true, 
        value: 'Display only field',
        placeholder: 'This field is display only'
    }
};

export const WithCharacterCasing: StoryObj<typeof TextField> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <TextField 
                placeholder="Uppercase input" 
                characterCasing="upper"
                value="this will be uppercase"
            />
            <TextField 
                placeholder="Lowercase input" 
                characterCasing="lower"
                value="THIS WILL BE LOWERCASE"
            />
        </div>
    )
};

export const WithMaxLength: StoryObj<typeof TextField> = {
    args: {
        placeholder: 'Max 10 characters',
        maxLength: 10,
        value: '1234567890'
    }
};

export const WithAutocomplete: StoryObj<typeof TextField> = {
    args: {
        placeholder: 'Email with autocomplete',
        type: 'email',
        autocomplete: true
    }
};

export const ComplexExample: StoryObj<typeof TextField> = {
    args: {
        placeholder: 'Complex field example',
        leading: <Icon name="a-icon-email" />,
        trailingIcon: 'a-icon-clear',
        required: true,
        sentiment: 'warning',
        messages: ['This field requires attention'],
        onTrailingClick: () => console.log('Clear clicked')
    }
};

export const AllStates: StoryObj<typeof TextField> = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3>Basic States</h3>
            <TextField placeholder="Default" />
            <TextField placeholder="With value" value="Some text" />
            <TextField placeholder="Disabled" disabled value="Disabled text" />
            <TextField placeholder="Readonly" readonly value="Readonly text" />
            <TextField placeholder="Display only" displayOnly value="Display only text" />
            
            <h3>Validation States</h3>
            <TextField 
                placeholder="Required field" 
                required 
                validationState={{
                    alertLevel: 'error',
                    messages: ['This field is required']
                }}
            />
            <TextField 
                placeholder="Success field" 
                sentiment="success"
                value="Valid input"
            />
            <TextField 
                placeholder="Warning field" 
                sentiment="warning"
                value="Warning input"
            />
            <TextField 
                placeholder="Critical field" 
                sentiment="critical"
                value="Error input"
            />
            
            <h3>With Icons</h3>
            <TextField 
                placeholder="With leading icon" 
                leading={<Icon name="a-icon-user" />}
            />
            <TextField 
                placeholder="With trailing icon" 
                trailingIcon="a-icon-search"
            />
            <TextField 
                placeholder="With both icons" 
                leading={<Icon name="a-icon-email" />}
                trailingIcon="a-icon-clear"
            />
        </div>
    )
};

export const Interactive: StoryObj<typeof TextField> = {
    render: () => {
        const [value, setValue] = React.useState('');
        const [sentiment, setSentiment] = React.useState<TextFieldSentiment | undefined>();
        const [messages, setMessages] = React.useState<string[]>([]);
        
        const handleChange = (newValue: string) => {
            setValue(newValue);
            
            // Simple validation
            if (newValue.length === 0) {
                setSentiment(undefined);
                setMessages([]);
            } else if (newValue.length < 3) {
                setSentiment('warning');
                setMessages(['Input is too short']);
            } else if (newValue.length > 10) {
                setSentiment('critical');
                setMessages(['Input is too long']);
            } else {
                setSentiment('success');
                setMessages(['Input looks good!']);
            }
        };
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <TextField 
                    placeholder="Interactive validation" 
                    value={value}
                    onValueChange={handleChange}
                    sentiment={sentiment}
                    messages={messages}
                    leading={<Icon name="a-icon-edit" />}
                    trailingIcon="a-icon-clear"
                    onTrailingClick={() => {
                        setValue('');
                        setSentiment(undefined);
                        setMessages([]);
                    }}
                />
                
                <div style={{ padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <strong>Current state:</strong>
                    <pre>{JSON.stringify({ value, sentiment, messages }, null, 2)}</pre>
                </div>
            </div>
        );
    }
};
