/*
 * Copyright 2022 The Yorkie Authors. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { getProjectAsync } from './projectsSlice';
import { Icon, TabList } from 'components';

export function ProjectTabList() {
  let { projectName } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!projectName) {
      return;
    }

    dispatch(getProjectAsync(projectName));
  }, [dispatch, projectName]);

  return (
    <TabList>
      <TabList.Item to={`/projects/${projectName}`} end>
        <Icon type="chart" />
        <TabList.Text>Overview</TabList.Text>
      </TabList.Item>
      <TabList.Item to={`/projects/${projectName}/quickstart`}>
        <Icon type="lightning" />
        <TabList.Text>Quick Start</TabList.Text>
      </TabList.Item>
      <TabList.Item to={`/projects/${projectName}/documents`}>
        <Icon type="keynote" />
        <TabList.Text>Documents</TabList.Text>
      </TabList.Item>
      <TabList.Item to={`/projects/${projectName}/schemas`}>
        <Icon type="viewList" />
        <TabList.Text>Schemas</TabList.Text>
      </TabList.Item>
      <TabList.Item to={`/projects/${projectName}/apikeys`}>
        <Icon type="key" />
        <TabList.Text>API Keys</TabList.Text>
      </TabList.Item>
      <TabList.Item to={`/projects/${projectName}/settings`}>
        <Icon type="setting" />
        <TabList.Text>Settings</TabList.Text>
      </TabList.Item>
    </TabList>
  );
}
