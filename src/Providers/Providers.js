import { NewGoalProvider } from "./addGoal/AddGoal";
import { NewGroupProvider } from "./addGroups/AddGroups";
import { AddHabitProvider } from "./addHabitos/AddHabitos";
import { AuthProvider } from "./auth/Auth";
import { EditionProvider } from "./editGroup/EditGroup";
import { FindGroupProvider } from "./findGroups/FindGroups";
import { FindHabitsProvider } from "./findHabitos/FindHabitos";
import { MyGoalsProvider } from "./myGoals/MyGoals";
import { MyGroupProvider } from "./myGroups/MyGroups";
import { EditActivityProvider } from "./editActivity/EditActivity";
import { UserProvider } from "./userProvider";
import { RemoveActivityProvider } from "./removeActivity/RemoveActivity";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AddHabitProvider>
        <FindHabitsProvider>
          <NewGroupProvider>
            <FindGroupProvider>
              <MyGroupProvider>
                <EditionProvider>
                  <NewGoalProvider>
                    <MyGoalsProvider>
                      <EditActivityProvider>
                        <UserProvider>
                          <RemoveActivityProvider>
                            {children}
                          </RemoveActivityProvider>
                        </UserProvider>
                      </EditActivityProvider>
                    </MyGoalsProvider>
                  </NewGoalProvider>
                </EditionProvider>
              </MyGroupProvider>
            </FindGroupProvider>
          </NewGroupProvider>
        </FindHabitsProvider>
      </AddHabitProvider>
    </AuthProvider>
  );
};
export default Providers;
