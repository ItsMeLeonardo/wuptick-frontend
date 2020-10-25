import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '../../../Avatar/index';
import { Label } from '../../../Label/index';
import { Modal } from '../../index';
import { Input } from '../../../Forms/Input/index';
import { useUser } from '../../../../hooks/useUser';
import { Colors } from '../../../../assets/css/colors';
import { Subtitle, MemberName, MemberEmail, Empty, Hr } from './styles';

const MembersList = ({ members }) => {
    return members.map((member, index) => (
        <div
            key={index}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5em',
                }}
            >
                <Avatar size={30} src={member.user.avatar} />
                <div className="user-info" style={{ marginLeft: '0.5em' }}>
                    <MemberName>
                        {member.user.name} {member.user.last_name}
                    </MemberName>
                    <MemberEmail>{member.user.email}</MemberEmail>
                </div>
            </div>

            <div>
                <Label
                    name="Member"
                    color={Colors.primary}
                    showCaret={true}
                    width="max-content"
                />
            </div>
        </div>
    ));
};

export const MemberModal = ({ modalRef }) => {
    const { currentProject } = useUser();
    const [members, setMembers] = useState([]);

    const handleMembersList = () => {
        if (members.length > 0) {
            return <MembersList members={currentProject.members} />;
        } else {
            return (
                <Empty>
                    You don&apos;t have members in this project yet. Let&apos;s
                    invite someone to your project sending an email with the
                    form below.
                </Empty>
            );
        }
    };

    useEffect(() => {
        if (Object.keys(currentProject).length > 0) {
            setMembers(currentProject.members);
        }
    }, [currentProject]);

    return (
        <Modal
            ref={modalRef}
            title={`${currentProject ? `${currentProject.name}:` : ''} Members`}
        >
            <Subtitle>Current members of the project</Subtitle>

            {handleMembersList()}

            <Hr />
            <div className="invite-container">
                <Subtitle>Invite members to your project</Subtitle>
                <Input placeholder="Email address or name" bg={Colors.white} />
                {/*                 <div className="invited-members" style={{ marginTop: '0.5em' }}>
                    {Array(1)
                        .fill()
                        .map((member, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '0.5em',
                                    }}
                                >
                                    <Avatar size={30} />
                                    <div
                                        className="user-info"
                                        style={{ marginLeft: '0.5em' }}
                                    >
                                        <MemberName>Peter Will</MemberName>
                                        <MemberEmail>
                                            peterwill@gmail.com
                                        </MemberEmail>
                                    </div>
                                </div>

                                <div>
                                    <Label
                                        name="Waiting for confirmation"
                                        color={Colors.yellow}
                                        showCaret={true}
                                        width="max-content"
                                    />
                                </div>
                            </div>
                        ))}
                </div> */}
            </div>
        </Modal>
    );
};

MemberModal.propTypes = {
    modalRef: PropTypes.any,
};
