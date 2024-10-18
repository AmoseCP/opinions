import React, { useEffect } from 'react'
import Gitalk from 'gitalk'

interface GitalkProps {
  title: string;
}

const GitalkComments: React.FC<GitalkProps> = ({ title }) => {
  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: process.env.NEXT_PUBLIC_GITHUP_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUP_CLIENT_SECRETS || '',
      repo: 'opinions', 
      owner: 'AmoseCP',
      admin: ['AmoseCP'], 
      id: title,
      distractionFreeMode: false,
    });

    gitalk.render('gitalk-container');
  }, [title]);

  return <div id="gitalk-container" />;
};

export default GitalkComments;
